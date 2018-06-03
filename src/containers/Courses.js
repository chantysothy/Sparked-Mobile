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

    // fetchData(){

    //     this.setState({
    //         isLoading: true,
    //         contacts: []
    //     })

    //     fetch('http://localhost:3000/api/course')
    //     .then(response => response.json())
    //     .then(parsedJSON => parsedJSON.results.map(course => (
    //         {
    //             name: course.name
    //         }
    //     )))
    //     .then(course => this.setState({
    //         data,
    //         isLoading: false
    //     }))
    //     .catch(error => console.log('parsing failed', error))
        
    // }

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
            //  courses.map(course => <ListItem  key={course._id} title={course.name} />)
            <FlatList
                data={courses}
                keyExtractor={(x, i) => i}
                renderItem={({ item }) =>
                <Text>
                {item.name}
                </Text>}
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