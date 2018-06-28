/* eslint no-return-assign: 0 */
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import VideoPlayer from 'react-native-video-player';
import { store } from '../../App';

const thumbnailUrl = 'http://13.232.61.192/uploads/logos/hMzpjRnRgkyjfEwFs.png'; // temporary video thumbnail

export default class VideoScreen extends Component {
  render() {
    const {
      resourceReducer: { resourceLink, resourceName },
    } = store.getState();
    return (
      <View>
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
        <Button onPress={() => this.player.stop()} title="Stop" />
        <Button onPress={() => this.player.pause()} title="Pause" />
        <Button onPress={() => this.player.resume()} title="Resume" />
      </View>
    );
  }
}
