import React from 'react';
import { FlatList } from 'react-native';
import {ListItem} from './react-native-elements';

function Directory(props) {
    //takes in an obj from FlatList as parament; destructured to {item}
    const renderDirectoryItem = ({item}) => {
        return (
            <ListItem   
                title={item.name}
                subtitle={item.description}
                leftAvatar={{source: require('./images/react-lake.jpg')}}
                onPress={() => props.onPress(item.id)}
            />
        )
    };
    return (
        // flatlist will iterate through every item through its data prop; runs renderItem on every item
        <FlatList
            data={props.campsites}
            renderItem={renderDirectoryItem}
            keyExtractor={item => item.id.toString()}
        />
    )
}

export default Directory;