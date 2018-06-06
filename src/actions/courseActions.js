export default function mapDispatchToProps(dispatch){
    return {
        onCourseClick: () => {
            // console.log(dispatch)
          const action = { 
              type: 'SET_ID'
          };
          dispatch(action);
        }
    }
}