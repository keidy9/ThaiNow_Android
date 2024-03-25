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
import backArrowBlack from '../../assets/backArrowBlack.png';
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
    onPress: '',
  },
  {
    key: 'MOVING_TO_US',
    name: 'Moving to US',
    icon: movingToUSIcon,
    background: '#FCEBE6',
    color: '#D15733',
    onPress: '',
  },
  {
    key: 'LIVING_PERMANENTLY',
    name: 'Living Permanently',
    icon: livingPermanentlyIcon,
    background: '#EDF5E6',
    color: '#89C157',
    onPress: '',
  },
  {
    key: 'TRAVEL',
    name: 'Travel',
    icon: travelIcon,
    background: '#E8F7F7',
    color: '#29A0A8',
    onPress: '',
  },
  {
    key: 'LEARNING',
    name: 'Learning',
    icon: learningIcon,
    background: '#FAF0F8',
    color: '#B072AA',
    onPress: '',
  },
  {
    key: 'TRANSFER',
    name: 'Transfer',
    icon: transferIcon,
    background: '#F7F4DF',
    color: '#8B8450',
    onPress: '',
  },
  {
    key: 'HEALTH',
    name: 'Health',
    icon: healthIcon,
    background: '#E9F6EF',
    color: '#3D9C7F',
    onPress: '',
  },
  {
    key: 'KIDS',
    name: 'Kids',
    icon: kidsIcon,
    background: '#FDEEF5',
    color: '#DC5A9A',
    onPress: '',
  },
  {
    key: 'BUSINESS_AND_INVESTMENT',
    name: 'Business and Investment',
    icon: businessAndInvestmentIcon,
    background: '#E6FBFE',
    color: '#35B7C7',
    onPress: '',
  },
  {
    key: 'THAI_PRIDE',
    name: 'Thai Pride',
    icon: thaiPrideIcon,
    background: '#ECEFFA',
    color: '#2C69B9',
    onPress: '',
  },
];

const Item = ({ item }) => (
  <TouchableOpacity onPress={item.onPress}>
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

const ThaiHelpThaiHome = ({ navigation }) => {
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
            paddingTop: 50,
            paddingLeft: 15,
            paddingRight: 15,
            paddingBottom: 25,
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
        ></FlatList>
      </View>
    </ScrollView>
  );
};

export default ThaiHelpThaiHome;
