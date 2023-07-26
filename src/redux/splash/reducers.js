import * as CONST from './constants';

const initialState = {
  loading: false,
  error: false,
  isSuccess: false,
  message: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CONST.GET_DATA:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case CONST.GET_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        isSuccess: true,
      };
    case CONST.GET_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        message: 'Error while getting data',
      };
    default:
      return state;
  }
};

export default reducer;
