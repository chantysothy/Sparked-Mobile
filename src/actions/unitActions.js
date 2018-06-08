export default function mapDispatchToProps(dispatch) {
  return {
    onUnitClick: (id, name) => {
      const action = {
        type: 'SET_UNIT',
        unitId: id,
        unitName: name,
      };
      dispatch(action);
    },
  };
}
