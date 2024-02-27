import React, { useState } from 'react';
import { Text, ScrollView, View, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SearchBar } from 'react-native-elements';
import searchBackground from '../assets/search-background.png';
import splashLogo from '../assets/splash-logo.png';

const Home = () => {
  const [searchText, setSearchText] = useState('');

  const updateSearchBar = (search) => {
    setSearchText({ search });
  };

  return (
    <ScrollView style={{ width: '100%' }} stickyHeaderIndices={[2]}>
      <View style={styles.bgImageContainer}>
        <Image
          style={styles.searchbarBackgroundImage}
          source={searchBackground}
          resizeMode="cover"
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          width: '100%',
          paddingTop: 50,
        }}
      >
        <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>
          Hello There!
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <View style={{ width: '75%' }}>
            <Text style={{ fontSize: 20, color: 'white' }}>
              Log in to start exploring new jobs, housing, and marketplace.{' '}
              <Text>Login</Text>
            </Text>
          </View>
          <View style={{ width: '25%' }}>
            <Image
              style={{ width: 50, height: 50 }}
              source={splashLogo}
              resizeMode="cover"
            />
          </View>
        </View>
      </View>

      <View style={styles.searchbarContainer}>
        <View style={styles.searchbarContainerInner}>
          <SearchBar
            platform="android"
            placeholder="Search for Deals, Food, Jobs, House"
            onChangeText={updateSearchBar}
            value={searchText}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bgImageContainer: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  searchbarBackgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },
  searchbarContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  searchbarContainerInner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  searchbar: {
    flex: 1,
  },
});

export default Home;
