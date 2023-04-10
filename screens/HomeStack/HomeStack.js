import { View, Text, ScrollView, RefreshControl } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen'
import JobDetails from '../JobDetails'
import ScreenHeaderBtn from '../../components/common/header/ScreenHeaderBtn';
import { COLORS, icons, images } from '../../constants';
import Search from './Search';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();



const HomeStack = () => {
  const navigation = useNavigation();
 

  return (
    <Stack.Navigator>
    <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerTitle:"", headerLeft: ()=>{return<ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>}, headerRight: ()=>{return<ScreenHeaderBtn iconUrl={images.profile} dimension="100%"/>}}}   />
    <Stack.Screen name="JobDetails" component={JobDetails} options={{headerStyle:{backgroundColor:COLORS.lightWhite},   headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension='60%'
              handlePress={() => navigation.goBack()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.share} dimension='60%' />
          ),
          headerTitle: "",
          }}/>
       


    <Stack.Screen name="Search" component={Search} options={{ headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.left}
                            dimension='60%'
                            handlePress={() => navigation.goBack()}
                        />
                    ),
                    headerTitle: "",}}/>
  </Stack.Navigator>
  )
}

export default HomeStack