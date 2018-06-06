import Meteor, { withTracker, MeteorListView } from 'react-native-meteor';
import React from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { ListItem, List } from 'react-native-elements'
import { connect } from 'react-redux';
import mapDispatchToProps from '../actions/courseActions';

class Courses extends React.Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
    }

    renderItem = course => <ListItem title={course.name}/>;
    
    render() {
      const { courseReady, courses, onCourseClick } = this.props;
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
                keyExtractor={(x, i) => i.toString()}
                renderItem={({ item }) =>
                // <ListItem title={item.name} key={item._id}/>
                <Text
                  onPress={onCourseClick}
                >{item.name}</Text>
              }
             />
         
        }
        </View>
      );
    }
  }
const mapStateToProps = state => {
  return {
    courseId: state.courseId
  }
}
const allCourses =  connect(mapStateToProps, mapDispatchToProps)(Courses);

export default withTracker(params => {
    const handle = Meteor.subscribe('courses');
    return {
      courseReady: handle.ready(),
      courses: Meteor.collection('course').find(),
    };
  })(allCourses);