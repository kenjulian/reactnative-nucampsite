import React, {Component} from 'react';
import { FlatList } from 'react-native';
import {ListItem} from './react-native-elements';
import {CAMPSITES} from '../shared/campsites';


//Directory turned into class component to be able to store state data
class Directory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES
        }
    }

    static navigationOptions = {
        title: 'Directory'
    };


    //takes in an obj from FlatList as parament; destructured to {item}
    render() {

        const {navigate} = this.props.navigation;
        const renderDirectoryItem = ({item}) => {
            return (
                <ListItem   
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{source: require('./images/react-lake.jpg')}}
                    onPress={() => navigate('CampsiteInfo', {campsiteId: item.id})}
                />
            )
        };
        return (
            // flatlist will iterate through every item through its data prop; runs renderItem on every item
            <FlatList
                data={this.state.campsites}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        )
  }
}

export default Directory;