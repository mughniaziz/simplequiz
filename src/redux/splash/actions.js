import * as CONST from './constants';
import Data from '../../dummy/data.json';

const getQuestion = () => async dispatch => {
  dispatch(dispatcher.fetchQuest());
  try {
    const response = Data;
    dispatch(dispatcher.fetchSuccess(response));
  } catch (error) {
    dispatch(dispatcher.fetchError());
  }
};

const dispatcher = {
  fetchQuest: () => ({type: CONST.GET_DATA}),
  fetchSuccess: data => ({type: CONST.GET_DATA_SUCCESS, data}),
  fetchError: () => ({type: CONST.GET_DATA_ERROR}),
};

export {getQuestion};
