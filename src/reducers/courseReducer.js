
const initialState = {
    courseId: ''
}

export default function courseReducer(state = initialState, action){
//    console.log(action);
    switch (action.type) {
        case 'SET_ID':
        console.log(state.courseId)
            return Object.assign({}, state, { courseId: state.courseId })
            break;
    
        default:
            break;
    }
   return state;
}