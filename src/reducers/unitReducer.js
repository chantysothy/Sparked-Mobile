
const initialState = {
    unitId: ''
}

export default function unitReducer(state = initialState, action){
    console.log(action)
    switch (action.type) {
        case 'SET_UNIT':
        const { unitId, unitName } = action;
            return Object.assign({}, state, { unitId, unitName })
            break; 
        default:
            return state;
            break;
    }
}