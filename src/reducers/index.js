import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import postsReducer from './postsReducer';
import weather from './weatherReducer';
import photoReducer from './photoReducer';

export default combineReducers({
  form: formReducer,
  posts: postsReducer,
  weather: weather,
  photos: photoReducer,
});
