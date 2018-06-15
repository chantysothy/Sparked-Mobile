/* eslint class-methods-use-this: 0, no-use-before-define: 0, no-unused-vars: 0, no-console: 0 */
import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import Pdf from 'react-native-pdf';
import { store } from '../../App';

export default class PDFExample extends React.Component {
  render() {
    const {
      resourceReducer: { resourceLink },
    } = store.getState();
    const source = {
      uri: resourceLink,
      cache: true,
    };
    return (
      <View style={styles.container}>
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
