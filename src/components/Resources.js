/* eslint class-methods-use-this: 0, no-use-before-define: 0, no-unused-vars: 0, no-console: 0 */
import React from 'react';
import { StyleSheet, Dimensions, View, Image, Text } from 'react-native';
import Pdf from 'react-native-pdf';
import { store } from '../../App';

export default class PDFExample extends React.Component {
  render() {
    const {
      resourceReducer: { resourceLink, resourceType },
    } = store.getState();
    const source = {
      uri: resourceLink,
      cache: true,
    };
    console.log(resourceLink);
    return (
      <View style={styles.container}>
        {resourceType === 'pdf' ? (
          <Pdf
            source={source}
            onLoadComplete={(numberOfPages, filePath) => {
              console.log(`number of pages: ${numberOfPages}`);
            }}
            onPageChanged={(page, numberOfPages) => {
              console.log(`current page: ${page}`);
            }}
            onError={(error) => {
              console.log(error);
            }}
            style={styles.pdf}
          />
        ) : resourceType === 'png' ? (
          <Image
            source={{ uri: resourceLink }}
            style={{ height: 200, resizeMode: 'stretch', margin: 5 }}
          />
        ) : (
          <Text>File not supporteed</Text>
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
});
