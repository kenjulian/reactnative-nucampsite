import React, {Component} from 'react';
import Home from './HomeComponent';
//import { ThemeConsumer } from 'react-native-elements';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Reservation from './ReservationComponent';
import Favorites from './FavoritesComponent';
import {View, Platform, StyleSheet, Text, ScrollView, Image} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createAppContainer} from 'react-navigation';
//import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import {Icon} from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';
import { connect } from 'react-redux';
import { fetchCampsites, fetchComments, fetchPromotions,
    fetchPartners } from '../redux/ActionCreators';

const mapDispatchToProps = {
        fetchCampsites,
        fetchComments,
        fetchPromotions,
        fetchPartners
    };

//import {CAMPSITES} from './shared/campsites';
//we are creating a stack navigator to be initialized into createAppContainer
const DirectoryNavigator = createStackNavigator(
    //1 required argument: route configs obj; defines which components are in the stack
    {
        Directory: {
                screen: Directory,
                navigationOptions: ({navigation}) => ({
                    headerLeft: <Icon
                        name='list'
                        type='font-awesome'
                        iconStyle={styles.stackIcon}
                        onPress={() => navigation.toggleDrawer()}
                        />
                })
            },
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
       
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                        name='home'
                        type='font-awesome'
                        iconStyle={styles.stackIcon}
                        onPress={() => navigation.toggleDrawer()}
                        />
        })            

        }
    
)

const AboutNavigator = createStackNavigator(
    {
        About: {screen: About}
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                        name='info-circle'
                        type='font-awesome'
                        iconStyle={styles.stackIcon}
                        onPress={() => navigation.toggleDrawer()}
                        />
        })
    }
)

const ContactNavigator = createStackNavigator(
    {
        Contact: {screen: Contact}
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                        name='address-card'
                        type='font-awesome'
                        iconStyle={styles.stackIcon}
                        onPress={() => navigation.toggleDrawer()}
                        />
        })
    }
);

const ReservationNavigator = createStackNavigator(
    {
        Reservation: { screen: Reservation }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='tree'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const FavoritesNavigator = createStackNavigator(
    {
        Favorites: { screen: Favorites }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='heart'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const CustomDrawerContentComponent = props => (
    <ScrollView>
        <SafeAreaView 
            style={styles.container}
            forceInset={{top: 'always', horizontal: 'never'}}>
            <View style={styles.drawerHeader}>
                <View style={{flex: 1}}>
                    <Image source={require('./images/logo.png')} style={styles.drawerImage} />
                </View>
                <View style={{flex: 2}}>
                    <Text style={styles.drawerHeaderText}>NuCamp</Text>
                </View>
            </View>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
);

const MainNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeNavigator,
            navigationOptions:{
                //tintColor is a special key from navigationOptions
                drawerIcon: ({tintColor}) => (
                <Icon
                    name='home'
                    type='font-awesome'
                    size={24}
                    color={tintColor}
                />
            )
            }

        },
        Directory: {
            screen: DirectoryNavigator,
            navigationOptions:{
                drawerIcon: ({tintColor}) => (
                <Icon
                    name='list'
                    type='font-awesome'
                    size={24}
                    color={tintColor}
                />
            )
            }
        },
        Reservation: {
            screen: ReservationNavigator,
            navigationOptions: {
                drawerLabel: 'Reserve Campsite',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='tree'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Favorites: {
            screen: FavoritesNavigator,
            navigationOptions: {
                drawerLabel: 'My Favorites',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='heart'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        About: {
            screen: AboutNavigator,
            navigationOptions:{
                drawerLabel: 'About Us',
                //tintColor is a special key from navigationOptions
                drawerIcon: ({tintColor}) => (
                <Icon
                    name='info-circle'
                    type='font-awesome'
                    size={24}
                    color={tintColor}
                />
            )
            }
        },
        Contact: {
            screen: ContactNavigator,
            navigationOptions:{
                drawerLabel: 'Contact Us',
                //tintColor is a special key from navigationOptions
                drawerIcon: ({tintColor}) => (
                <Icon
                    name='home'
                    type='font-awesome'
                    size={24}
                    color={tintColor}
                />
            )
            }
         }
    },
    {
        //are these accessible words?
        drawerBackgroundColor: '#CEC8FF',
        contentComponent: CustomDrawerContentComponent
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

    componentDidMount() {
        this.props.fetchCampsites();
        this.props.fetchComments();
        this.props.fetchPromotions();
        this.props.fetchPartners();
    }

    render() {
        return ( 
        <View style={{
            flex: 1,
            paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
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

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    drawerHeader: {
        backgroundColor: '#5637DD',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        height: 60,
        width: 60
    },
    stackIcon: {
        marginLeft:10,
        color:'#fff',
        fontSize: 24
    }
})

//since theres no mapStateToProps, use null in place
export default connect(null, mapDispatchToProps)(Main);