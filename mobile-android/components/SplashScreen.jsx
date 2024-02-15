import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import splashLogo from '../assets/splash-logo.png'

const SplashScreen = () => {
    return (
    <View style={styles.container}>
       <Image style={styles.logo} source={splashLogo} resizeMode="contain"/>
    </View>

    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0C529C', //blue color
  },
  logo: {
    width: '25%',
    height: '25%',
    aspectRatio: 1,
    alignSelf: 'center',
  }
});


export default SplashScreen;