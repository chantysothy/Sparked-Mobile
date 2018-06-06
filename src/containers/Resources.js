import Meteor, { withTracker, MeteorListView } from 'react-native-meteor';
import React from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { ListItem, List } from 'react-native-elements'
import { connect } from 'react-redux';
import mapDispatchToProps from '../actions/unitActions';
import { withNavigation } from 'react-navigation';
import { store } from '../../App';

// const { unitId } = store.getState();

class Resources extends React.Component {
    getUnitId = (id, name) => {
      this.props.onUnitClick(id, name);
      return this.props.navigation.navigate('ScreenTwo');
    }

    renderUnit = ({item}) => <Text onPress={() => this.getUnitId(item._id, item.name)}>{item.name}</Text>
    render() {
      const { resourcesReady, resources } = this.props;
      const { unitName } = store.getState();
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Resources</Text>
          {
            !resourcesReady 
            ? 
            <ActivityIndicator size="large" color="#0000ff" />
            : 
            !resources.length ? <Text>No Resource for {unitName} found </Text>
            :
            <FlatList
                data={resources}
                keyExtractor={(x, i) => i.toString()}
                renderItem={this.renderUnit }
             />
        }
        
        </View>
      );
    }
  }
// const mapStateToProps = (state, props) => {
//   return {
//     unitId: state.unitId,
//     unitName: state.unitName
//   }
// }
const unitWithNavigationProps = withNavigation(Resources)
// const allUnits =  connect(mapStateToProps, mapDispatchToProps)(unitWithNavigationProps);

export default withTracker(params => {
    const { unitId } = store.getState();
    checkedId = checkUnderScore(unitId);
    const handle = Meteor.subscribe('resourcess');
    return {
      resourcesReady: handle.ready(),
      resources: Meteor.collection('Resources').find({'meta.unitId': checkedId}),
    };
  })(unitWithNavigationProps);

  export  const checkUnderScore = (id) =>  id.includes('-') > -1 ? id.substring(1) : id