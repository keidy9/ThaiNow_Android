import React, { useState, useEffect } from 'react';
import {
  Text,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { StackActions } from '@react-navigation/native';
import { primary } from '../../themes.js';
import ThaiHelpThaiHomeBackground from '../../assets/ThaiHelpThai/ThaiHelpThaiHomeBackground.png';
import backArrowWhite from '../../assets/backArrowWhite.png';
import forwardArrowBlack from '../../assets/forwardArrowBlack.png';
import categories from '../../postCategories.js';

const ThaiHelpThaiHome = ({ navigation }) => {
  const [guidebookPosts, setGuidebookPosts] = useState(null);

  useEffect(() => {
    fetch(
      'https://api.searchforthai.com/api/search/guidebooks?limit=20&page=1&profileId=-1&requesterId=-1&sortByOrder=desc'
    )
      .then((response) => response.json())
      .then((data) => setGuidebookPosts(data.fetchResult));
  }, []);

  const popAction = StackActions.pop(1);
  //   console.log(guidebookPosts);

  const Item = ({ item }) => {
    return (
      <View style={{ width: 300, height: 250, margin: 20 }}>
        <TouchableOpacity style={{ width: '100%', height: '100%' }}>
          <Image
            style={{ flex: 1, width: null, height: null }}
            source={{ uri: item.details.bannerUrl }}
            resizeMode="cover"
          />
          <View style={{ paddingVertical: 20 }}>
            <Text>{categories[item.details.category]}</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
              {item.details.title}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView style={{ width: '100%' }}>
      <View style={{ flex: 1, justifyContent: 'flex-start', width: '100%' }}>
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
            source={ThaiHelpThaiHomeBackground}
            resizeMode="cover"
          />
        </View>
        <TouchableOpacity
          style={{ marginTop: 25, marginLeft: 15, marginBottom: 200 }}
          onPress={() => {
            navigation.dispatch(popAction);
          }}
        >
          <Image
            style={{ width: 35, height: 35 }}
            source={backArrowWhite}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>

      <View style={{ backgroundColor: 'white' }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
            paddingBottom: 10,
          }}
        >
          <Text style={{ color: primary, fontSize: 25, fontWeight: 'bold' }}>
            Thai Guide Book
          </Text>
          <TouchableOpacity
            onPress={() => {
            navigation.navigate('ThaiGuideBook', {guidebookPosts});
            }}
          >
            <Image
              style={{ width: 35, height: 35 }}
              source={forwardArrowBlack}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>

        <FlatList
          data={guidebookPosts}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.id}
          horizontal={true}
        />
      </View>
    </ScrollView>
  );
};

export default ThaiHelpThaiHome;
