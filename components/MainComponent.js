import React, {Component} from 'react';
//import { ThemeConsumer } from 'react-native-elements';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import Constants from 'expo-constants';
import {View, Platform} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
//import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';

//import {CAMPSITES} from './shared/campsites';

const DirectoryNavigator = createStackNavigator(
    //1 required argument: route configs obj; defines which components are in the stack
    {
        Directory: {screen: Directory},
        CampsiteInfo: {screen: CampsiteInfo},

    },
    {
        initialRouteName: 'Directory',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }

        }
    }
);

const AppNavigator = createAppContainer(DirectoryNavigator);

class Main extends Component {
    //needs constructor to set up state property to hold campsites data
    //setting Main as a container component to be a parent to the presentational components
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         campsites: CAMPSITES,
    //         selectedCampsite: null

    //     }
    // }

    // onCampsiteSelect(campsiteId) {
    //     this.setState({selectedCampsite: campsiteId});
    // }

    render() {
        return ( 
        <View style={{
            flex: 1,
            paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
            }}>
            {/* <Directory 
                campsites={this.state.campsites}
                onPress={campsiteId => this.onCampsiteSelect(campsiteId)} 
            />;
            <CampsiteInfo
                campsite={this.state.campsites.filter(campsite => campsite.id === this.state.selectedCampsite)[0]}
            /> */}
            {/* AppNavigator replaces the above: now contains the DirectoryNavigator which in turn contains the different screens */}
            <AppNavigator /> 
        </View>
        )
    }
}

export default Main;