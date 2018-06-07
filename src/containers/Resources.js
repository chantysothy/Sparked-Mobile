// @flow
import Meteor, { withTracker } from 'react-native-meteor';
import * as React from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { withNavigation } from 'react-navigation';
import { store } from '../../App';

type Props = {
  onUnitClick: (id: String, name: String) => {},
  navigation: Object,
  resourcesReady: Boolean,
  resources: Array<Object>,
}

class Resources extends React.Component<Props> {
  getUnitId = (id: String, name: String) => {
    this.props.onUnitClick(id, name);
    return this.props.navigation.navigate('ScreenTwo');
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
