import Meteor, { withTracker } from 'react-native-meteor';
import React from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { store } from '../../App';
import mapDispatchToProps from '../actions/resourceActions';

class Resources extends React.Component {
  constructor(props) {
    super(props);
    this.isGet = false;
  }
  setResourceStates = (id, name, type) => {
    const baseUrl = 'http://10.1.0.142:3000/cdn/storage/';

    const resourceUrl = `${baseUrl}/Resources/${id}/original/${id}.${type}`;
    this.props.onResourceClick(id, name, type, resourceUrl);

    return this.props.navigation.navigate('ViewResourceScreen');
  }
  static propTypes = {
    onResourceClick: PropTypes.func,
    navigation: PropTypes.object,
    resourcesReady: PropTypes.bool.isRequired,
    resources: PropTypes.array.isRequired,
  }

  renderUnit = ({ item }) => (
    <Text onPress={() => this.setResourceStates(item._id, item.name, item.ext)}>{item.name}</Text>
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
const mapStateToProps = state => ({
  resourceId: state.resourceId,
  resourceName: state.resourceName,
  resourceLink: state.resourceLink,
});
const resourceWithNavigationProps = withNavigation(Resources);
export const checkUnderScore = id => (id && id.includes('-') ? id.substring(1) : id);

const allResources = connect(
  mapStateToProps,
  mapDispatchToProps,
)(resourceWithNavigationProps);

export default withTracker(() => {
  const {
    unitReducer: { unitId },
  } = store.getState();
  const checkedId = checkUnderScore(unitId);
  const handle = Meteor.subscribe('resourcess');
  return {
    resourcesReady: handle.ready(),
    resources: Meteor.collection('Resources').find({ 'meta.unitId': checkedId }),
  };
})(allResources);
