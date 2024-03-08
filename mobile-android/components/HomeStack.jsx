import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home.jsx';
import ThaiHelpThaiHome from './ThaiHelpThai/ThaiHelpThaiHome.jsx';

const HomeStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ThaiHelpThaiHome"
        component={ThaiHelpThaiHome}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
