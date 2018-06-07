// @flow
export default function mapDispatchToProps(dispatch: any) {
  return {
    onUnitClick: (id: String, name: String) => {
      const action = {
        type: 'SET_UNIT',
        unitId: id,
        unitName: name,
      };
      dispatch(action);
    },
  };
}
