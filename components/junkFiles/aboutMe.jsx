import React, { Component, PropTypes } from 'react';
import PaperExampleSimple from './aboutMeText.jsx';

export default class AboutMe extends Component {
   render() {
      return (
      <div id="parent">
          <div id="wide">
            <PaperExampleSimple/>
          </div>
          <div id="narrow">
            <img src="images/2.jpg" />
          </div>
      </div>
      )
   }
}
