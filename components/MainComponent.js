import React, {Component} from 'react';
import { ThemeConsumer } from 'react-native-elements';
import Directory from './DirectoryComponent';
import {CAMPSITES} from './shared/campsites';

class Main extends Component {
    //needs constructor to set up state property to hold campsites data
    //setting Main as a container component to be a parent to the presentational components
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES
        }
    }

    render() {
        return <Directory campsites={this.state.campsites} />;
    }
}

export default Main;