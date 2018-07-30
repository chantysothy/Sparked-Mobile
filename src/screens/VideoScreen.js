/* eslint no-return-assign: 0 */
import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import VideoPlayer from 'react-native-video-player';
import { connect } from 'react-redux';
import { store } from '../../App';
import { baseUrl } from '../containers/Resources';
import mapDispatchToProps from '../actions/resourceActions';

const thumbnailUrl = 'http://13.232.61.192/uploads/logos/hMzpjRnRgkyjfEwFs.png'; // temporary video thumbnail as the logo

class _videoScreen extends Component {
  state = {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  }

  static propTypes = {
    navigation: PropTypes.object,
    onResourceClick: PropTypes.func,
  }

  updatePlayer = (id, name, type) => {
    const resourceUrl = `${baseUrl}Resources/${id}/original/${id}.${type}`;
    this.props.onResourceClick(id, name, type, resourceUrl);
    // force the component to re-render after the store changes
    this.forceUpdate();
  }
  render() {
    const {
      resourceReducer: { resourceLink, resourceName },
    } = store.getState();
    const { flexDirection, alignItems, justifyContent } = this.state;
    const layoutStyle = { flexDirection, justifyContent, alignItems };
    const videos = this.props.navigation.getParam('resources', 'list');
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 22, marginTop: 22 }}>{resourceName.replace(/\.[^/.]+$/, '')}</Text>
        <VideoPlayer
          endWithThumbnail
          thumbnail={{ uri: thumbnailUrl }}
          video={{ uri: resourceLink }}
          videoWidth={undefined}
          videoHeight={undefined}
          duration={undefined}
          ref={r => (this.player = r)}
        />
        <View style={[styles.layout, layoutStyle]}>
          <Button style={styles.box} onPress={() => this.player.stop()} title="Stop" />
          <Button style={styles.box} onPress={() => this.player.pause()} title="Pause" />
          <Button style={styles.box} onPress={() => this.player.resume()} title="Resume" />
        </View>

        {
          <FlatList
            data={videos}
            keyExtractor={(x, i) => i.toString()}
            renderItem={({ item }) => (
              <View style={styles.box}>
                <Text
                  onPress={() => this.updatePlayer(item._id, item.name, item.ext)}
                  style={{ color: '#fff' }}>
                  {item.name}
                </Text>
              </View>
            )}
          />
        }
      </View>
    );
  }
}
const mapStateToProps = state => ({
  resourceId: state.resourceId,
  resourceName: state.resourceName,
  resourceLink: state.resourceLink,
});

const VideoScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_videoScreen);

export default VideoScreen;

const styles = new StyleSheet.create({
  container: {
    flex: 1,
  },
  layout: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  box: {
    padding: 25,
    margin: 5,
    backgroundColor: 'steelblue',
  },
});
