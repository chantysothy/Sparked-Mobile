import Meteor, { withTracker, MeteorListView } from 'react-native-meteor';
import React from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { ListItem } from 'react-native-elements'


export class Courses extends React.Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
    }

    renderItem = course => <ListItem title={course.name}/>;
    
    render() {
      const { courseReady, courses } = this.props;
      const { data } = this.state;
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          {
            !courseReady 
            ? 
            <ActivityIndicator size="large" color="#0000ff" />
            : 
            <FlatList
                data={courses}
                keyExtractor={(x, i) => i}
                renderItem={({ item }) =>
                <ListItem title={item.name} key={item._id}/>}
        />
        }
        </View>
      );
    }
  }

export default withTracker(params => {
    const handle = Meteor.subscribe('courses');
    return {
      courseReady: handle.ready(),
      courses: Meteor.collection('course').find(),
    };
  })(Courses);