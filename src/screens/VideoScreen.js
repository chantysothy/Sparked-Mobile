/* eslint no-return-assign: 0 */
import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import VideoPlayer from 'react-native-video-player';
import { store } from '../../App';

const thumbnailUrl = 'http://13.232.61.192/uploads/logos/hMzpjRnRgkyjfEwFs.png'; // temporary video thumbnail as the logo

export default class VideoScreen extends Component {
  state = {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  }

  static propTypes = {
    navigation: PropTypes.object,
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
                <Text style={{ color: '#fff' }}>{item.name}</Text>
              </View>
            )}
          />
        }
      </View>
    );
  }
}

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
