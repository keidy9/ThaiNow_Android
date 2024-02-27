import React, { useState} from 'react';
import { Text, ScrollView, View, StyleSheet, Image } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import searchBackground from '../assets/search-background.png'

const Home = () => {
    const [searchText, setSearchText] = useState('');

    const updateSearchBar = (search) => {
        setSearchText({ search })
    };

    return (
    <ScrollView stickyHeaderIndices={[2]}>
       <View style={styles.searchbarContainer}>
       <Image style={styles.searchbarBackgroundImage} source={searchBackground} resizeMode="cover"/>
            <SearchBar
            platform='android'
            placeholder='Search for Deals, Food, Jobs, House'
            onChangeText={updateSearchBar}
            value={searchText}
            />
        </View>
    </ScrollView>

    )
}

const styles = StyleSheet.create({
    searchbarContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: '100%',}
,
  searchbarBackgroundImage: {
    flex: 1,
    width: '100%',

  },
  logo: {
    width: '25%',
    height: '25%',
    aspectRatio: 1,
    alignSelf: 'center',
  }
});


export default Home;

