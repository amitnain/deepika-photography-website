import React, { Component, PropTypes } from 'react'

export default class Image extends Component {
   render() {
      return (
         <li>
            <div className="imageDiv"><img src={this.props.imageURL} alt="HTML5 Icon"/> </div>
         </li>
      )
   }
}
