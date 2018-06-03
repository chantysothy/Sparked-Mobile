import React from 'react';
import { View, Text } from 'react-native';
import { withTracker, MeteorListView } from 'react-native-meteor';

export default class Course extends React.Component {
  renderRow = (course) => <Text>{course.name}</Text>;

  render() {
    const { courseReady, courses } = this.props;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> Courses</Text>
        {
          !courseReady ? <Text> Loading ...</Text> : <View/>
        }
        <MeteorListView
          collection="courses"
          selector={{ done: true }}
          options={{ sort: { createdAt: -1 } }}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}