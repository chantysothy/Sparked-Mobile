import Meteor, { withTracker } from 'react-native-meteor';
import React from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import { store } from '../../App';

class Resources extends React.Component {
  getUnitId = (id, name) => {
    this.props.onUnitClick(id, name);
    return this.props.navigation.navigate('ScreenTwo');
  }
  static propTypes = {
    onUnitClick: PropTypes.func,
    navigation: PropTypes.object,
    resourcesReady: PropTypes.bool.isRequired,
    resources: PropTypes.array.isRequired,
  }

  renderUnit = ({ item }) => (
    <Text onPress={() => this.getUnitId(item._id, item.name)}>{item.name}</Text>
  )
  render() {
    const { resourcesReady, resources } = this.props;
    const { unitName } = store.getState();
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Resources</Text>
        {!resourcesReady ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : !resources.length ? (
          <Text>No Resource for {unitName} found </Text>
        ) : (
          <FlatList
            data={resources}
            keyExtractor={(x, i) => i.toString()}
            renderItem={this.renderUnit}
          />
        )}
      </View>
    );
  }
}
// const mapStateToProps = (state, props) => ({
//   unitId: state.unitId,
//   unitName: state.unitName,
// });
const unitWithNavigationProps = withNavigation(Resources);
export const checkUnderScore = (id: String) => (id.includes('-') ? id.substring(1) : id);

// const allUnits =  connect(mapStateToProps, mapDispatchToProps)(unitWithNavigationProps);

export default withTracker(() => {
  const { unitId } = store.getState();
  const checkedId = checkUnderScore(unitId);
  const handle = Meteor.subscribe('resourcess');
  return {
    resourcesReady: handle.ready(),
    resources: Meteor.collection('Resources').find({ 'meta.unitId': checkedId }),
  };
})(unitWithNavigationProps);
