import React, {Component} from 'react';
import { FlatList } from 'react-native';
import {Tile} from 'react-native-elements';
//import {CAMPSITES} from '../shared/campsites';
import {connect} from 'react-redux';
import {baseUrl} from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        campsites: state.campsites

    };
};


//Directory turned into class component to be able to store state data
class Directory extends Component {

    

    static navigationOptions = {
        title: 'Directory'
    };


    //takes in an obj from FlatList as parament; destructured to {item}
    render() {

        const {navigate} = this.props.navigation;
        const renderDirectoryItem = ({item}) => {
            return (
                <Tile   
                    title={item.name}
                    caption={item.description}
                    featured
                    imageSrc={() => navigate('CampsiteInfo', {campsiteId: item.id})}
                    onPress={{uri: baseUrl + item.image}}
                />
            )
        };
        return (
            // flatlist will iterate through every item through its data prop; runs renderItem on every item
            <FlatList
                data={this.props.campsites.campsites}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        )
  }
}

export default connect(mapStateToProps)(Directory);