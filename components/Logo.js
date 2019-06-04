import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from './StyledText';

export default class Logo extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.LogoContainer}>
            <Image
              source={require('../assets/images/Traveller.png')
              }
              style={styles.LogoImage}
            />
          </View>

          <View style={styles.subTituloContainer}>
            <Text style={styles.subTitulo}>
                Bring anything from anywhere.
             </Text>
          </View>
            
        </ScrollView>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  subTitulo: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  LogoContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  LogoImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  subTituloContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
});
