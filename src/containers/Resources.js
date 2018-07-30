import Meteor, { withTracker } from 'react-native-meteor';
import React from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, YellowBox } from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { store } from '../../App';
import mapDispatchToProps from '../actions/resourceActions';

export const baseUrl = 'http://13.232.61.192/cdn/storage/';

// ignore the isMounted() warning;
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);

class Resources extends React.Component {
  constructor(props) {
    super(props);
    this.isGet = false;
  }
  setResourceStates = (id, name, type) => {
    // const baseUrl = 'http://10.1.0.149:3000/cdn/storage/';
    const resourceUrl = `${baseUrl}Resources/${id}/original/${id}.${type}`;
    this.props.onResourceClick(id, name, type, resourceUrl);
    switch (type) {
      case 'png':
        return this.props.navigation.navigate('ImagesScreen');
      case 'pdf':
        return this.props.navigation.navigate('ViewResourceScreen');
      case 'mp4':
        return this.props.navigation.navigate('VideoScreen', { resources: this.props.videos });
      default:
        break;
    }
  }
  static propTypes = {
    onResourceClick: PropTypes.func,
    navigation: PropTypes.object,
    resourcesReady: PropTypes.bool.isRequired,
    resources: PropTypes.array.isRequired,
    videos: PropTypes.array,
  }

  renderUnit = ({ item }) => (
    <Text
      style={Styles.center}
      onPress={() => this.setResourceStates(item._id, item.name, item.ext)}>
      {item.name}
    </Text>
  )

  render() {
    const { resourcesReady, resources } = this.props;
    const { unitName } = store.getState();
    return (
      <View style={Styles.centersContainer}>
        <Text style={Styles.titleText}>Resources</Text>
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
    handle,
    resources: Meteor.collection('Resources').find({ 'meta.unitId': checkedId }),
    videos: Meteor.collection('Resources').find({ 'meta.unitId': checkedId, isVideo: true }),
  };
})(allResources);

const Styles = new StyleSheet.create({
  centersContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },

  center: {
    color: '#fff',
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
