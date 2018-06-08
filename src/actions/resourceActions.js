export default function mapDispatchToProps(dispatch) {
  return {
    onResourceClick: (id, name, type) => {
      const action = {
        type: 'SET_RESOURCE',
        resourceId: id,
        resourceName: name,
        resourceType: type,
      };
      dispatch(action);
    },
  };
}
