import React from 'react';
import { Image } from 'react-native';

const ImagesScreen = () => (
  <Image
    source={{
      uri:
        'http://10.1.0.142:3000/cdn/storage//Resources/W59EnxtDZdqXXKyAh/original/W59EnxtDZdqXXKyAh.png',
    }}
    style={{ width: 400, height: 400 }}
  />
);

export default ImagesScreen;
