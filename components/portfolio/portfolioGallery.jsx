import React from 'react';
import Gallery from 'react-photo-gallery';

export default class PortfolioGallery extends React.Component {

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
