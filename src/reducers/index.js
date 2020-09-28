import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import postsReducer from './postsReducer';
import weather from './weatherReducer';

export default combineReducers({
  form: formReducer,
  posts: postsReducer,
  weather: weather,
});
