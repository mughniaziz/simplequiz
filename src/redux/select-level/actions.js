import * as CONST from './constants';

const levelSelect = payload => async (dispatch, getState) => {
  dispatch(dispatcher.selLevel(payload));
  try {
    let question = await getState().core.question;
    const filtered = question
      .filter(itm => itm.level === payload)
      .map(item => item);
    dispatch(dispatcher.filterQuest(filtered));
  } catch (error) {
    console.log({error});
  }
};

const dispatcher = {
  selLevel: payload => ({type: CONST.UPDATE_LEVEL, payload}),
  filterQuest: payload => ({type: CONST.FILTER_QUESTION, payload}),
};

export {levelSelect};
