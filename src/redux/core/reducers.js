import * as CONST from './constants';

const initialState = {
  levelSelected: '',
  question: null,
  filterQuestion: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CONST.GET_DATA_SUCCESS:
      return {
        ...state,
        question: action.data,
      };
    case CONST.UPDATE_LEVEL:
      return {
        ...state,
        levelSelected: action.payload,
      };
    case CONST.FILTER_QUESTION:
      return {
        ...state,
        filterQuestion: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
