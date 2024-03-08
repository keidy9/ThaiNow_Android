import React, { useState } from 'react';
import {
  Text,
  ScrollView,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SearchBar } from 'react-native-elements';
import {
  searchBackground,
  splashLogo,
  iconThaiHelp,
  iconJobs,
  iconHousing,
  iconMarketplace,
} from '../assets/home';
import { primary } from '../themes.js';

const Home = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');

  const updateSearchBar = (search) => {
    setSearchText({ search });
  };

  return (
    <ScrollView style={{ width: '100%' }}>
      <View>
        <View
          style={{
            position: 'absolute',
            flex: 1,
            justifyContent: 'flex-start',
            width: '100%',
            height: '100%',
            zIndex: -1,
          }}
        >
          <Image
            style={{ flex: 1, width: null, height: null }}
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
            paddingLeft: 15,
            paddingRight: 15,
            paddingBottom: 25,
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
            <View style={{ width: '85%' }}>
              <Text style={{ fontSize: 20, color: 'white' }}>
                Log in to start exploring new jobs, housing, and marketplace.{' '}
                <Text>Login</Text>
              </Text>
            </View>
            <View style={{ width: '15%' }}>
              <Image
                style={{ width: 60, height: 60 }}
                source={splashLogo}
                resizeMode="cover"
              />
            </View>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              width: '90%',
              backgroundColor: 'pink',
              ...Platform.select({
                ios: {
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                },
                android: {
                  elevation: 15,
                },
              }),
            }}
          >
            <SearchBar
              platform="android"
              placeholder="Search for Deals, Food, Jobs, House"
              onChangeText={updateSearchBar}
              value={searchText}
            />
          </View>
        </View>
      </View>
      <Text
        style={{
          fontSize: 20,
          color: primary,
          fontWeight: 'bold',
          width: '100%',
          textAlign: 'center',
          marginTop: 25,
          marginBottom: 10,
        }}
      >
        Feast Like Never Before
      </Text>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: '100%',
          height: 100,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ThaiHelpThaiHome');
          }}
        >
          <Image
            style={{ width: 60, height: 60 }}
            source={iconThaiHelp}
            resizeMode="cover"
          />
          <Text style={{ textAlign: 'center' }}>Thai Help</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{ width: 60, height: 60 }}
            source={iconJobs}
            resizeMode="cover"
          />
          <Text style={{ textAlign: 'center' }}>Jobs</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{ width: 60, height: 60 }}
            source={iconHousing}
            resizeMode="cover"
          />
          <Text style={{ textAlign: 'center' }}>Housing</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{ width: 60, height: 60 }}
            source={iconMarketplace}
            resizeMode="cover"
          />
          <Text style={{ textAlign: 'center' }}>Marketplace</Text>
        </TouchableOpacity>
      </View>

      <View style={{ height: 1000, backgroundColor: 'yellow' }}></View>
    </ScrollView>
  );
};

export default Home;
