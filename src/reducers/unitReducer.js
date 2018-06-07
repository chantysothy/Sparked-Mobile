/* eslint no-case-declarations: 'off' */
const initialState = {
  unitId: '',
};

export default function unitReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_UNIT':
      const { unitId, unitName } = action;
      return Object.assign({}, state, { unitId, unitName });
    default:
      return state;
  }
}
