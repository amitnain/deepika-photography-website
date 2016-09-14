import React from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import PortfolioGallery from './portfolioGallery.jsx';
import { fetchImagesFromFolder, fetchSubFolders } from '../../actions/dropbox';

export const PORTFOLIO = 'PORTFOLIO';

const customContentStyle = {
  width: '95%',
  height: '100%',
  maxWidth: 'none',
  maxHeight: 'none',
};

/**
 * Dialog content can be scrollable.
 */
export default class GalleryDialog extends React.Component {

  componentDidMount() {
    fetchImagesFromFolder(this.props.path, this.readImageResults);
  }

  addPhotoToPhotoSet(url, callback) {
    var img = new Image();
    img.src = url;
    img.onload = function() {
      var lightboxImage = {src: this.src};
      var aspectRatio = (this.width / this.height).toFixed(2);
      var photo = {src: this.src, width: this.width,
         aspectRatio: Number(aspectRatio),
         height: this.height, lightboxImage: lightboxImage };
      callback(photo);
     };
  }

  readImageResults(promises) {
    Promise.all(promises).then(function AcceptHandler(results) {
      for (var i = 0; i < results.length; i++) {
        var imageJsonResponse =  JSON.parse(results[i]);
        this.addPhotoToPhotoSet(imageJsonResponse.url,
        function (photo) {
          var photoSet = this.state.photoSet;
          photoSet.push(photo);
          this.setState({
            photoSet: photoSet,
          });
        }.bind(this));
      }
    }.bind(this), function ErrorHandler(error) {
        console.log(error);
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      photoSet: [],
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.readImageResults = this.readImageResults.bind(this);
  }

  handleOpen() {
    this.setState({
      open: true
    });
  }
  handleClose() {
    this.setState({
      open: false
    });
  }
  render() {
    const actions = [
      <RaisedButton
        label="Close"
        primary={true}
        onTouchTap={this.handleClose}
      />
    ];

    return (
      <div>
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          contentStyle={customContentStyle}
          autoScrollBodyContent={true}
        >
        <PortfolioGallery photoSet={this.state.photoSet}/>
        </Dialog>
      </div>
    );
  }
}
