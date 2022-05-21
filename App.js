import React from 'react';
//import { StatusBar } from 'expo-status-bar';
import Main from './components/MainComponent';
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/configureStore';


//creates configures and returns redux store
const store = ConfigureStore();

export default function App() {
  return (
    // pass the store as a prop so MainComponent and its children can access the redux store
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

