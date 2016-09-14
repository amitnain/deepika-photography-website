import React from 'react';
import Gallery from 'react-photo-gallery';

export default class Portfolio extends React.Component {

  render() {
    var photoSet = this.props.photoSet;
    if (typeof photoSet != 'undefined' && photoSet.length > 0) {
      return (
        <Gallery photos={this.props.photoSet}/>
      );
    } else {
      return (<div className="imageDiv"><img src="" alt="Images Loading"/> </div>);
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
