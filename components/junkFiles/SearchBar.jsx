import React, { Component, PropTypes } from 'react';

export default class SearchBar extends Component {
   render() {
      return (
         <div className="mainSearchText">
            <input type = 'text' defaultValue="Please Search Images" ref = 'input'
               onKeyPress={(e) => this.handleClick(e)}/>
         </div>
      )
   }

   handleClick(e) {
      var key=e.keyCode || e.which;
      if (key==13){
         //If Its enter
         const node = this.refs.input
         const text = node.value.trim()
         this.props.onAddClick(text)
         node.value = ''
      }
   }
}
