/* eslint no-case-declarations: 'off' */
export const initialState = {
  unitId: '',
  resourceId: '',
  resourceName: '',
  resourceType: '',
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
