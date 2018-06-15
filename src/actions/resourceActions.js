export default function mapDispatchToProps(dispatch) {
  return {
    onResourceClick: (id, name, type, link) => {
      const action = {
        type: 'SET_RESOURCE',
        resourceId: id,
        resourceName: name,
        resourceType: type,
        resourceLink: link,
      };
      dispatch(action);
    },
  };
}
