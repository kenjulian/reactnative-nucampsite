import React, {Component} from 'react';
import {Text, View, ScrollView, FlatList} from 'react-native';
import {Card, Icon} from 'react-native-elements';
// import {CAMPSITES} from '../shared/campsites';
// import {COMMENTS} from '../shared/comments';
import {connect} from 'react-redux';
import {baseUrl} from '../shared/baseUrl';
import {postFavorite} from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        campsites: state.campsites,
        comments: state.comments,
        favorites: state.favorites
    };
};

const mapDispatchToProps = {
    postFavorite: campsiteId => (postFavorite(campsiteId))
};

function RenderCampsite(props) {

    const {campsite} = props;
    if (campsite) {
        return (
            <Card
                featuredTitle={campsite.name}
                image={{uri: baseUrl + campsite.image}}>
                <Text style={{margin:10}}>
                    {campsite.description}
                </Text>
                <Icon
                    name={props.favorite ? 'heart' : 'heart-o'}
                    type='font-awesome'
                    color='#f50'
                    raised
                    reverse 
                    onPress={() => props.favorite ? console.log('Already faved') : props.markFavorite()}               
                />    
            </Card>
        )
    }
    return <View /> //if no valid campsite obj, return view
}

function RenderComments({comments}) {

    const renderCommentItem = ({item}) => {
        //the passed in item is each comment in the array from the flatlist
        //then rendered in the format below
        return (
            <View style={{margin:10}}>
                <Text style={{fontSize: 14}}>{item.text}</Text>
                <Text style={{fontSize: 12}}>{item.rating} Stars</Text>
                <Text style={{fontSize: 12}}>{`--${item.text}, ${item.date}`}</Text>
            </View>
        )
    }

    return (
        <Card title='Comments'>
            <FlatList
                data={comments}
                renderItem={renderCommentItem}
                keyExtractor={item => item.id.toString()}
            />
        </Card>
    )
}

class CampsiteInfo extends Component {
    

    markFavorite(campsiteId) {
        this.props.postFavorite(campsiteId);
    }

    static navigationOptions = {
        title: 'Campsite Information'
    }

    render() {
        //from the navigate props
        const campsiteId = this.props.navigation.getParam('campsiteId');
        const campsite = this.props.campsites.campsites.filter(campsite => campsite.id === campsiteId)[0]
        const comments = this.props.comments.comments.filter(comment => comment.campsiteId === campsiteId);
        return (
            <ScrollView>
                <RenderCampsite 
                    campsite={campsite} 
                    // is this campsite a fave or not; returns boolean
                    favorite={this.props.favorites.includes(campsiteId)}
                    markFavorite={() => this.markFavorite(campsiteId)}
                />
                <RenderComments comments={comments} />
            </ScrollView>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampsiteInfo);