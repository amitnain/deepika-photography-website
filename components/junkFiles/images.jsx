import React, { Component, PropTypes } from 'react';
import Image from './image.jsx';
import Sample from './portfolioGallery.jsx';

export default class Images extends Component {

  render() {
    return (
         <ul>
            {this.props.todos.map(todo =>
               <Image
               key = {todo.id}
               {...todo}
               />
            )}
         </ul>
      )
    }
}
