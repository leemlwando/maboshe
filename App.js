/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, {Component} from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import Navigation from './app/config/navigation';
import { store, persistor } from './store/store';
export default class App extends Component {
  componentDidMount(){
    persistor.purge().then(response => console.log(response)).catch(error => console.log(error))
}
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigation />
        </PersistGate>
    </Provider>
    );
  }
}




// const GOOGLE_MAPS_APIKEY = 'AIzaSyAKI29EVH-B5AD0EjYV3C6RykcLXYAZW7k';