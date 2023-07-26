import {combineReducers} from 'redux';
import core from './core/reducers';
import levels from './select-level/reducers';
import splash from './splash/reducers';

const rootReducers = combineReducers({
  core,
  levels,
  splash,
});

export default rootReducers;
