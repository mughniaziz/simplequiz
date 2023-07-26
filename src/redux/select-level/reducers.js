import * as CONST from './constants';

const initialState = {
  selectLevel: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CONST.UPDATE_LEVEL:
      return {
        ...state,
        selectLevel: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
