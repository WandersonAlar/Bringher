import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux'
import ConfigureStore from './store'
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import * as Fireabse from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyDzM78B0RKjKiCftiRmZhhR6-eoaJ89Wek",
  authDomain: "bringher-9576f.firebaseapp.com",
  databaseURL: "https://bringher-9576f.firebaseio.com",
  projectId: "bringher-9576f",
  storageBucket: "bringher-9576f.appspot.com",
  appId: "1:420752997481:web:abc1db158525e42a"
};

Fireabse.initializeApp(firebaseConfig);

const store = ConfigureStore();



export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <Provider store={store}>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
        </Provider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/Traveller.png'),
        require('./assets/images/user-icon.png'),
        require('./assets/images/bag.png'),
      ]),
      Font.loadAsync({

        ...Icon.Ionicons.font,
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
