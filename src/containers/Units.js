// @flow
import Meteor, { withTracker } from 'react-native-meteor';
import * as React from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

import mapDispatchToProps from '../actions/unitActions';

type Props = {
  onUnitClick: (id: String, name: String) => {},
  navigation: Object,
  unitReady: Boolean,
  units: Array<Object>,
}

class Units extends React.Component<Props> {
  getUnitId = (id, name) => {
    this.props.onUnitClick(id, name);
    return this.props.navigation.navigate('ScreenTwo', { id, name });
  }

  renderUnit = ({ item }) => (
    <Text onPress={() => this.getUnitId(item._id, item.name)}>{item.name}</Text>
  )
  render() {
    const { unitReady, units } = this.props;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {!unitReady ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <FlatList
            data={units}
            keyExtractor={(x, i) => i.toString()}
            renderItem={this.renderUnit}
          />
        )}
      </View>
    );
  }
}
const mapStateToProps = state => ({
  unitId: state.unitId,
  unitName: state.unitName,
});
const unitWithNavigationProps = withNavigation(Units);
const allUnits = connect(
  mapStateToProps,
  mapDispatchToProps,
)(unitWithNavigationProps);

export default withTracker(() => {
  const handle = Meteor.subscribe('units');
  return {
    unitReady: handle.ready(),
    units: Meteor.collection('unit').find(),
  };
})(allUnits);
