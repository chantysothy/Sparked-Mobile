/* eslint no-case-declarations: 'off' */
import { initialState } from './unitReducer';

export default function resourceReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_RESOURCE':
      const { resourceId, resourceName, resourceType } = action;
      return Object.assign({}, state, { resourceId, resourceName, resourceType });
    default:
      return state;
  }
}
