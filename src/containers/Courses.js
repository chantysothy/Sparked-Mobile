import Meteor, { withTracker, MeteorListView } from 'react-native-meteor';
import React from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { ListItem, List } from 'react-native-elements'
import { connect } from 'react-redux';
import mapDispatchToProps from '../actions/courseActions';
import { withNavigation } from 'react-navigation';

class Courses extends React.Component {
    getCourseId = (id) => {
      this.props.onCourseClick(id);
      return this.props.navigation.navigate('ScreenTwo');
    }

    renderCourse = ({item}) => <Text onPress={() => this.getCourseId(item._id)}>{item.name}</Text>
    render() {
      const { courseReady, courses, onCourseClick } = this.props;
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
                renderItem={this.renderCourse }
             />
         
        }
        
        </View>
      );
    }
  }
const mapStateToProps = (state, props) => {
  return {
    courseId: state.courseId
  }
}
const courseWithNavigationProps = withNavigation(Courses)
const allCourses =  connect(mapStateToProps, mapDispatchToProps)(courseWithNavigationProps);

export default withTracker(params => {
    const handle = Meteor.subscribe('courses');
    return {
      courseReady: handle.ready(),
      courses: Meteor.collection('course').find(),
    };
  })(allCourses);