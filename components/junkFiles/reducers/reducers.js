import { combineReducers } from 'redux';
import { SEARCH_IMAGES } from '../actions/actions';

function todos(state = [], action) {
   switch (action.type) {
      case SEARCH_IMAGES:
         var arr = [];
         var images = action.images;
         if (typeof images != 'undefined') {
            var len = images.length;
            var id = action.id;
            id++;
            for (var i = 0; i < len; i++) {
               var cse_image = images[i].pagemap.cse_image;
               if (typeof cse_image != 'undefined') {
                  arr.push({
                     id: id++,
                     imageURL: images[i].pagemap.cse_image[0].src
                  });
               }
            }
         }
         return arr;

      default:
      return state;
   }
}

const todoApp = combineReducers({
   todos
});

export default todoApp;
