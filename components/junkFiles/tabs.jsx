import React, { Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import { connect } from 'react-redux';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import ToolbarExamplesSimple from './ToolBar.jsx';
import CardExampleWithAvatar from './card.jsx';
import AboutMe from './aboutMe.jsx';
import Portfolio from './portfolioGallery.jsx';
import {ImagesContainer} from './imagesContainer.js';
import MenuExampleSimple from './menu.jsx';
import DropDownMenuSimpleExample from './dropdownMenu.jsx';
import GalleryGrid from './portfolio/galleryGrid.jsx';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};

export default class MainTab extends Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value, refer) {
    this.setState({
      slideIndex: value,
    });
  }

  render() {
    return (
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab label="HOME" value={0} />
          <Tab label="PORTFOLIO" value={1} />
          <Tab label="ABOUT" value={2} />
          <Tab label="CONTACT" value={3} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
            This is going to be home page.
          </div>
          <div style={styles.slide}>
            <GalleryGrid/>
          </div>
          <div style={styles.slide}>
            <AboutMe/>
          </div>
          <div style={styles.slide}>
            This is going to be ContactUs Page.
          </div>
        </SwipeableViews>
      </div>
    );
  }
}
function select(state) {
   return {
      visibleTodos: state.todos
   }
}

//export default connect(select)(MainTab)
/*
<div className="container">
  <CardExampleWithAvatar/>
</div>*/
