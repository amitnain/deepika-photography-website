export const SEARCH_IMAGES = 'SEARCH_IMAGES';
var CSE_ID = "010333717988042835509:stf6cnhhtpc";
var API_KEY = "AIzaSyDFCIuiEFoTvW5p3_m0FJnSB0Coov7AT30";

var FLICKER_API_KEY = "801b80fc0b9d4eb71a6ffc414c4b1304";
//var FLICKER_USER_ID =
var FLICKER_PHOTOSET_ID = "72157669977132203";
var FLICKER_METHOD = "flickr.photosets.getPhotos";
var FLICKER_API_URL = "https://api.flickr.com/services/rest/";
var FLICKER_API_FORMAT = "jsonp";
var FULL_URL = "https://api.flickr.com/services/rest/?nojsoncallback=1&user_id=143232403%40N05&method=flickr.photosets.getPhotos&api_key=801b80fc0b9d4eb71a6ffc414c4b1304&photoset_id=72157669977132203&format=json";
let nextTodoId = 0;


export function addTodo(text) {
   var imageQuery = text.trim().toLowerCase();
   var query = "key="+ API_KEY + "&cx=" + CSE_ID + "&q=" + imageQuery;
   var xhr = new XMLHttpRequest();
   //xhr.open('GET', 'https://www.googleapis.com/customsearch/v1?' + query, false);
   var t0 = performance.now();
   //var header = " -H \"Authorization: Bearer trY6dVZ5twIAAAAAAAADIMs4IEM9svExpjA5iu89R1V1CRwO-ZEYKqhpMqr6kFHb\"";
   //var dropboxUrl = "https://api.dropboxapi.com/1/media/auto/" + "Photos/Sample Album/Boston City Flow.jpg";
   var dropboxUrl = "https://api.dropboxapi.com/1/metadata/auto/" + "Photos/Sample Album";

   xhr.open('POST', dropboxUrl, false);
   xhr.setRequestHeader("Authorization", "Bearer trY6dVZ5twIAAAAAAAADIMs4IEM9svExpjA5iu89R1V1CRwO-ZEYKqhpMqr6kFHb");
   /* // Async call - Need to figure out how to make these in React.
   xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var imageResponse =  JSON.parse(xhr.responseText);
            return {
               type: ADD_TODO,
               id: nextTodoId++,
               text
            };
            console.log("Image 1 " + imageResponse.items[0].pagemap.cse_image[0].src);
        }
   };*/
   xhr.send();
   var t1 = performance.now();
   console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
   var images;
   if (xhr.status === 200) {
      console.log("Sample Response" + xhr.responseText);
      var response = xhr.responseText;
      var t2 = performance.now();
      console.log("Call to doSomething took " + (t2 - t0) + " milliseconds.");
      /*
      response = response.replace('jsonFlickrApi(', '');
	    response = response.replace('})', '}');
	    response = response.replace(/\\'/g, "'");*/
      var imageResponse =  JSON.parse(response);
      console.dir(imageResponse);
      //images = imageResponse.items.slice(0, 5);
   }

   return {
      type: SEARCH_IMAGES,
      id: nextTodoId++,
      images
   };
}
