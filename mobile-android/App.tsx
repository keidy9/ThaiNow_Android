/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import SplashScreen from './components/SplashScreen.jsx';
import Home from './components/Home.jsx';
import {
  homeIcon,
  homeIconBlue,
  notifications,
  notificationsBlue,
  profile,
  profileBlue,
  saveList,
  saveListBlue,
} from './assets/navigationBar';
import HomeStack from './components/HomeStack.jsx'

type SectionProps = PropsWithChildren<{
  title: string,
}>;

function Section({ children, title }: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}
      >
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}
      >
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [isSplash, setIsSplash] = useState(true);
  const Tab = createBottomTabNavigator();

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setIsSplash(false);
    }, 2000);
    // Clear the timer on component unmount
    return () => clearTimeout(splashTimer);
  }, []);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return isSplash ? (
    <SplashScreen />
  ) : (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let icon;

            if (route.name === 'HomeStack') {
              iconName = focused ? 'HomeBlue' : 'Home';
              focused
                ? (icon = (
                    <Image
                      style={{ width: 25, height: 25 }}
                      source={homeIconBlue}
                    />
                  ))
                : (icon = (
                    <Image
                      style={{ width: 25, height: 25 }}
                      source={homeIcon}
                    />
                  ));
            } else if (route.name === 'Save List') {
              iconName = focused ? 'SaveListBlue' : 'SaveList';
              focused
                ? (icon = (
                    <Image
                      style={{ width: 25, height: 25 }}
                      source={saveListBlue}
                    />
                  ))
                : (icon = (
                    <Image
                      style={{ width: 25, height: 25 }}
                      source={saveList}
                    />
                  ));
            } else if (route.name === 'Notifications') {
              iconName = focused ? 'NotificationsBlue' : 'NotificationsBlue';
              focused
                ? (icon = (
                    <Image
                      style={{ width: 25, height: 25 }}
                      source={notificationsBlue}
                    />
                  ))
                : (icon = (
                    <Image
                      style={{ width: 25, height: 25 }}
                      source={notifications}
                    />
                  ));
            } else if (route.name === 'Profile') {
              iconName = focused ? 'ProfileBlue' : 'Profile';
              focused
                ? (icon = (
                    <Image
                      style={{ width: 25, height: 25 }}
                      source={profileBlue}
                    />
                  ))
                : (icon = (
                    <Image style={{ width: 25, height: 25 }} source={profile} />
                  ));
            }

            // You can return any component that you like here!
            return icon;
          },
          tabBarActiveTintColor: '#003CA7',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Save List"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Notifications"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Profile"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
