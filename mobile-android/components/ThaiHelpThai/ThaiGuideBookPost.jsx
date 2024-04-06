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
import backArrowBlack from '../../assets/backArrowBlack.png';
import categories from '../../postCategories.js';

const ThaiGuideBookPost = ({ navigation, route }) => {
  const [category, setCategory] = useState(null);

  useEffect(() => {
    setCategory(route.params);
  }, [route.params]);

      console.log(category);

  return <Text>hi</Text>;
};

export default ThaiGuideBookPost;
