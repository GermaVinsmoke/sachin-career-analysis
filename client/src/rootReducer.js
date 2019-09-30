import { combineReducers } from 'redux';
import homeReducer from './home/reducer';
import statsReducer from './stats/reducer';
import feedbackReducer from './feedback/reducer';

export default combineReducers({
  home: homeReducer,
  stats: statsReducer,
  feedback: feedbackReducer
});
