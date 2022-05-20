import React, {Component} from 'react';
import Home from './HomeComponent';
//import { ThemeConsumer } from 'react-native-elements';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Constants from 'expo-constants';
import {View, Platform} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer} from 'react-navigation';
//import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';

//import {CAMPSITES} from './shared/campsites';
//we are creating a stack navigator to be initialized into createAppContainer
const DirectoryNavigator = createStackNavigator(
    //1 required argument: route configs obj; defines which components are in the stack
    {
        Directory: {screen: Directory},
        CampsiteInfo: {screen: CampsiteInfo}

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

//we are creating a stack navigator to be initialized into createAppContainer
const HomeNavigator = createStackNavigator(
    {
        Home: {screen: Home}
       

    },
    {
       
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
)

const AboutNavigator = createStackNavigator(
    {
        About: {screen: About}
    },
    {
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
)

const ContactNavigator = createStackNavigator(
    {
        Contact: {screen: Contact}
    },
    {
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
)

const MainNavigator = createDrawerNavigator(
    {
        Home: {screen: HomeNavigator},
        Directory: {screen: DirectoryNavigator},
        About: {screen: AboutNavigator},
        Contact: {screen: ContactNavigator}
    },
    {
        drawerBackgroundColor: '#CEC8FF'
    }
)

//MainNavigator replaced DirectoryNavigator as top level navigator
const AppNavigator = createAppContainer(MainNavigator);

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