const API_ACCESS_TOKEN = "access-token";

function fetchImageLink(filePath) {
  return getDropboxAPIPromise('media', filePath);
}

function getDropboxAPIPromise(api, path) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      resolve(this.responseText);
    };
    var dropboxUrl = "https://api.dropboxapi.com/1/"+ api + "/auto/" + path;
    xhr.onerror = reject;
    xhr.open('GET', dropboxUrl);
    xhr.setRequestHeader("Authorization", API_ACCESS_TOKEN);
    xhr.send();
  });
}

export function fetchImagesFromFolder(path, callBackFn) {

  var folderPromise = getDropboxAPIPromise('metadata', path);
  folderPromise.then(function(response) {
    var folderResponse =  JSON.parse(response);
    if (typeof folderResponse != 'undefined') {
      var promises = [];
      var images = folderResponse.contents;
      for (var i = 0; i < images.length; i++) {
        var image = images[i];
        promises.push(fetchImageLink(image.path));
      }
      callBackFn(promises);
    }
  }, function() {
    console.log("Couldn't read folder content");
  });
  //return
}

export function fetchSubFolders(path) {
  var folderPromise = getDropboxAPIPromise('metadata', path);
  return folderPromise.then(function(response) {
    var folderResponse =  JSON.parse(response);
    if (typeof folderResponse != 'undefined') {
      var subFolders = folderResponse.contents;
      var subFoldersPath = [];
      for (var i = 0; i < subFolders.length; i++) {
        var subFolder = subFolders[i];
        if (subFolder.is_dir === true) {
          subFoldersPath.push(subFolder.path);
        }
      }
      return subFoldersPath;
    }
  }, function() {
    console.log("Couldn't read folder content");
  });
}
