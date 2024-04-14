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
import backArrowBlack from '../../assets/backArrowBlack.png';
import categories from '../../postCategories.js';

const ThaiGuideBookPostCategory = ({ navigation, route }) => {
  const [category, setCategory] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setCategory(route.params);

    fetch(
      `https://api.dev.searchforthai.com/api/search/guidebooks?category=${route.params.key}&limit=50&page=1&profileId=-1&requesterId=-1&sortByOrder=desc`
    )
      .then((response) => response.json())
      .then((data) => setPosts(data.fetchResult));
  }, [route.params]);

  const GuidebookItem = ({ item }) => {
    return (
      <View
        style={{
          width: '100%',
          height: undefined,
          aspectRatio: 1,
        }}
      >
        <TouchableOpacity
          style={{
            width: '100%',
            height: '100%',
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignContent: 'flex-start',
          }}
        >
          <Image
            style={{ flex: 1, width: null, height: null }}
            source={{ uri: item.details.bannerUrl }}
            resizeMode="contain"
          />
          <View>
            <Text>{categories[item.details.category]}</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
              {item.details.title}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const popAction = StackActions.pop(1);

  return (
    <ScrollView style={{ width: '100%', backgroundColor: 'none' }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'flex-start',
          width: '100%',
          paddingTop: 25,
          paddingLeft: 15,
          paddingRight: 15,
          paddingBottom: 25,
        }}
      >
        <View style={{ width: '10%' }}>
          <TouchableOpacity
            onPress={() => {
              navigation.dispatch(popAction);
            }}
          >
            <Image
              style={{
                width: 35,
                height: 35,
              }}
              source={backArrowBlack}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
        <View style={{ width: '80%' }}>
          <Text
            style={{
              fontWeight: 500,
              fontSize: 25,
              color: 'black',
              textAlign: 'center',
            }}
          >
            {route.params.name}
          </Text>
        </View>
        <View style={{ width: '10%' }}></View>
      </View>
      <Text style={{ textAlign: 'left', paddingLeft: 20, fontSize: 20 }}>
        50 posts in {route.params.name}
      </Text>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignContent: 'center',
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        {posts.map((post) => {
          return <GuidebookItem item={post} key={post.id} />;
        })}
      </View>
    </ScrollView>
  );
};

export default ThaiGuideBookPostCategory;
