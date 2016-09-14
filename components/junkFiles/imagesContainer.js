import { connect } from 'react-redux';
import Images from './images.jsx';

export const ImagesContainer = connect(
  function mapStateToProps(state) {
    return { todos: state.todos };
  }
)(Images);
