import React, {Component} from 'react';
import { ThemeConsumer } from 'react-native-elements';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import {View} from 'react-native';

import {CAMPSITES} from './shared/campsites';

class Main extends Component {
    //needs constructor to set up state property to hold campsites data
    //setting Main as a container component to be a parent to the presentational components
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
            selectedCampsite: null

        }
    }

    onCampsiteSelect(campsiteId) {
        this.setState({selectedCampsite: campsiteId});
    }

    render() {
        return 
        <View style={{flex:1}}>
            <Directory 
                campsites={this.state.campsites}
                onPress={campsiteId => this.onCampsiteSelect(campsiteId)} 
            />;
            <CampsiteInfo
                campsite={this.state.campsites.filter(campsite => campsite.id === this.state.selectedCampsite)[0]}
        </View>
    }
}

export default Main;