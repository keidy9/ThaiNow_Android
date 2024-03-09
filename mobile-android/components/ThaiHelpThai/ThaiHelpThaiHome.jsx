import React, { useState } from 'react';
import { Text, ScrollView, View, Image, TouchableOpacity } from 'react-native';
import { StackActions } from '@react-navigation/native';
import { primary } from '../../themes.js';
import ThaiHelpThaiHomeBackground from '../../assets/ThaiHelpThai/ThaiHelpThaiHomeBackground.png';
import backArrow from '../../assets/backArrow.png';

const ThaiHelpThaiHome = ({ navigation }) => {
  const popAction = StackActions.pop(1);

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
          style={{ marginTop: 55, marginLeft: 15, marginBottom: 200 }}
          onPress={() => {
            navigation.dispatch(popAction);
          }}
        >
          <Image
            style={{ width: 35, height: 35 }}
            source={backArrow}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ThaiHelpThaiHome;
