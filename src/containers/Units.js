/* eslint no-use-before-define: 0 */
import Meteor, { withTracker } from 'react-native-meteor';
import React from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import mapDispatchToProps from '../actions/unitActions';

class Units extends React.Component {
  getUnitId = (id, name) => {
    this.props.onUnitClick(id, name);
    return this.props.navigation.navigate('ScreenTwo', { id, name });
  }

  static propTypes = {
    onUnitClick: PropTypes.func,
    navigation: PropTypes.object,
    unitReady: PropTypes.bool.isRequired,
    units: PropTypes.array.isRequired,
  }
  renderUnit = ({ item }) => (
    <Text onPress={() => this.getUnitId(item._id, item.name)}>{item.name}</Text>
  )
  render() {
    const { unitReady, units } = this.props;
    return (
      <View style={Styles.centersContainer}>
        <View style={Styles.titleBar}>
          <Text style={Styles.titleText}>All Units</Text>
        </View>
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
// const mapStateToProps = state => ({
//   unitId: state.unitId,
//   unitName: state.unitName,
// });
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

const Styles = new StyleSheet.create({
  centersContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },

  center: {
    color: '#000',
    backgroundColor: 'rgba(0,102,169,0.8)',
    marginBottom: 1,
    padding: 20,
  },

  titleBar: {
    marginTop: 24,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },

  titleText: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'left',
    color: 'rgba(0,102,169,1)',
  },
});
