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
import { primary, headerBlue } from '../../themes.js';
import searchBackground from '../../assets/home/searchBackground.png';
import backArrowWhite from '../../assets/backArrowWhite.png';
import forwardArrowBlack from '../../assets/forwardArrowBlack.png';
import {
  basicLivingIcon,
  movingToUSIcon,
  livingPermanentlyIcon,
  travelIcon,
  learningIcon,
  transferIcon,
  healthIcon,
  kidsIcon,
  businessAndInvestmentIcon,
  thaiPrideIcon,
} from '../../assets/ThaiHelpThai/ThaiGuideBook';

const categories = [
  {
    key: 'BASIC_LIVING',
    name: 'Basic Living',
    icon: basicLivingIcon,
    background: '#F9F2E7',
    color: '#C89340',
  },
  {
    key: 'MOVING_TO_US',
    name: 'Moving to US',
    icon: movingToUSIcon,
    background: '#FCEBE6',
    color: '#D15733',
  },
  {
    key: 'LIVING_PERMANENTLY',
    name: 'Living Permanently',
    icon: livingPermanentlyIcon,
    background: '#EDF5E6',
    color: '#89C157',
  },
  {
    key: 'TRAVEL',
    name: 'Travel',
    icon: travelIcon,
    background: '#E8F7F7',
    color: '#29A0A8',
  },
  {
    key: 'LEARNING',
    name: 'Learning',
    icon: learningIcon,
    background: '#FAF0F8',
    color: '#B072AA',
  },
  {
    key: 'TRANSFER',
    name: 'Transfer',
    icon: transferIcon,
    background: '#F7F4DF',
    color: '#8B8450',
  },
  {
    key: 'HEALTH',
    name: 'Health',
    icon: healthIcon,
    background: '#E9F6EF',
    color: '#3D9C7F',
  },
  {
    key: 'KIDS',
    name: 'Kids',
    icon: kidsIcon,
    background: '#FDEEF5',
    color: '#DC5A9A',
  },
  {
    key: 'BUSINESS_AND_INVESTMENT',
    name: 'Business and Investment',
    icon: businessAndInvestmentIcon,
    background: '#E6FBFE',
    color: '#35B7C7',
  },
  {
    key: 'THAI_PRIDE',
    name: 'Thai Pride',
    icon: thaiPrideIcon,
    background: '#ECEFFA',
    color: '#2C69B9',
  },
];

const ThaiHelpThaiHome = ({ navigation, route }) => {
  const [guidebookPosts, setGuidebookPosts] = useState(null);

  useEffect(() => {
    setGuidebookPosts(route.params.guidebookPosts);
  }, [route.params.guidebookPosts]);

  const Item = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('ThaiGuideBookPostCategory', {
          key: item.key,
          name: item.name,
        });
      }}
    >
      <View
        style={{
          padding: 15,
          borderColor: 'white',
          borderWidth: 1,
          borderRadius: 8,
          width: 160,
          height: 120,
          backgroundColor: item.background,
          margin: 10,
          elevation: 5,
        }}
      >
        <Image
          source={item.icon}
          style={{ width: 35, height: 35, marginLeft: 5 }}
        />
        <Text
          style={{
            fontSize: 18,
            fontWeight: 500,
            marginTop: 10,
            marginBottom: 20,
            color: item.color,
          }}
        >
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const GuidebookItem = ({ item }) => {
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

  const popAction = StackActions.pop(1);

  return (
    <ScrollView style={{ width: '100%', backgroundColor: 'none' }}>
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
            paddingTop: 25,
            paddingLeft: 15,
            paddingRight: 15,
            paddingBottom: 50,
          }}
        >
          <TouchableOpacity
            style={{ marginBottom: 25 }}
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
          <Text style={{ fontWeight: 'bold', fontSize: 25, color: 'white' }}>
            Thai Guide Book
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          width: '100%',
          padding: 20,
          backgroundColor: 'none',
        }}
      >
        <Text>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque
        </Text>
        <Text
          style={{
            marginTop: 20,
            marginBottom: 20,
            fontWeight: 'bold',
            fontSize: 25,
            color: headerBlue,
          }}
        >
          Category
        </Text>
        <FlatList
          data={categories}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.key}
          horizontal={true}
          style={{ marginBottom: 10, paddingBottom: 15 }}
        />
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
              navigation.navigate('ThaiGuideBook', { guidebookPosts });
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
          renderItem={({ item }) => <GuidebookItem item={item} />}
          keyExtractor={(item) => item.id}
          horizontal={true}
        />
      </View>
    </ScrollView>
  );
};

export default ThaiHelpThaiHome;
