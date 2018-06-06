export default function mapDispatchToProps(dispatch){
    return {
        onCourseClick: (e) => {
            console.log(e)
          const action = { 
              type: 'SET_ID',
              courseId: e
          };
          dispatch(action);
        }
    }
}