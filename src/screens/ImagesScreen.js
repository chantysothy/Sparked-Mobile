/* eslint class-methods-use-this: 0 */
import React from 'react';
import { Image } from 'react-native';
import { store } from '../../App';

class ImagesScreen extends React.Component {
  render() {
    const {
      resourceReducer: { resourceLink },
    } = store.getState();
    return (
      <Image
        source={{
          uri: resourceLink,
        }}
        style={{ width: 400, height: 400 }}
      />
    );
  }
}

export default ImagesScreen;
