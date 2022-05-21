import React, {Component} from 'react';
import { View, FlatList } from 'react-native';
import {Tile} from 'react-native-elements';
//import {CAMPSITES} from '../shared/campsites';
import {connect} from 'react-redux';
import {baseUrl} from '../shared/baseUrl';
import Loading from './LoadingComponent';

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

        if (this.props.campsites.isLoading) {
            return <Loading />;
        }
        
        if (this.props.campsites.errMess) {
            return (
                <View>
                    <Text>{this.props.campsites.errMess}</Text>
                </View>
            )
        }
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