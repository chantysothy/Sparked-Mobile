
const initialState = {
    courseId: ''
}

export default function courseReducer(state = initialState, action){
    switch (action.type) {
        case 'SET_ID':
            return Object.assign({}, state, { courseId: action.courseId })
            break;
    
        default:
            break;
    }
   return state;
}