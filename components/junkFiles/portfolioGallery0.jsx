import React from 'react';
import Gallery from 'react-photo-gallery';
import { fetchImages } from '../actions/dropbox';

export const PORTFOLIO1 = 'PORTFOLIO';

export default class Portfolio1 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      photoSet: [],
    };
    this.readImageResults = this.readImageResults.bind(this);
  }
  componentDidMount() {
    fetchImages(PORTFOLIO, this.readImageResults);
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

  render() {
    if (this.state.photoSet.length > 0) {
      return (
        <Gallery photos={this.state.photoSet}/>
      );
    } else {
      return (<div className="imageDiv"><img src="" alt="HTML5 Icon"/> </div>);
    }
  }
}

const PHOTO_SET = [
  {
    src: 'images/1.jpg',
    width: 300,
    height: 300,
    aspectRatio: 1,
    lightboxImage:{
    src: 'images/1.jpg',
    srcset: [
      'images/1.jpg 1024w',
      'images/1.jpg 800w',
      'images/1.jpg 500w',
      'images/1.jpg 320w',
    ]
    }
  },
  {
    src: 'images/2.jpg',
    width: 300,
    height: 300,
    aspectRatio: 0.76,
    lightboxImage:{
    src: 'images/2.jpg',
    srcset: [
      'images/2.jpg 1024w',
      'images/2.jpg 800w',
      'images/2.jpg 500w',
      'images/2.jpg 320w',
    ]
    }
  },
  {
    src: 'images/3.jpg',
    width: 300,
    height: 300,
    aspectRatio: 1.5,
    lightboxImage:{
    src: 'images/3.jpg',
    srcset: [
      'images/3.jpg 1024w',
      'images/3.jpg 800w',
      'images/3.jpg 500w',
      'images/3.jpg 320w',
    ]
    }
  },
  {
    src: 'images/4.jpg',
    width: 300,
    height: 300,
    aspectRatio: 1.5,
    lightboxImage:{
    src: 'images/4.jpg',
    srcset: [
      'images/4.jpg 1024w',
      'images/4.jpg 800w',
      'images/4.jpg 500w',
      'images/4.jpg 320w',
    ]
    }
  },
  {
    src: 'images/5.jpg',
    width: 300,
    height: 300,
    aspectRatio: 1.64,
    lightboxImage:{
    src: 'images/5.jpg'
    }
  }
];
