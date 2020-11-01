import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Firstpagepro from '../products/Firstpage';
import Search from '../products/Search';
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native';
import { CardStyleInterpolators } from '@react-navigation/stack';
import ProductDisplay from '../products/Productdisplay'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import User from '../Userprofile/User'; 
import { createDrawerNavigator } from '@react-navigation/drawer';
import colors from '../config/colors';
import EditProfile from '../Userprofile/edit';
import Home from '../home/1HomeScreen';
import CommentScreen from '../home/commentscreen';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Calander from '../date/Calander';



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const DrawerUser = () =>(
<Drawer.Navigator drawerPosition="right">
<Drawer.Screen name="User" component={User} />
</Drawer.Navigator>


)

const ProductNavigator = () => (

  <Stack.Navigator initialRouteName="First">
    <Stack.Screen name="First" component={Firstpagepro} options={{headerShown: false}}/>
    <Stack.Screen name="Search" component={Search} options={{headerShown: false}}/>
    <Stack.Screen name="Product" component={ProductDisplay} options={{headerShown: false}}/>
  </Stack.Navigator>
)

const HomeNavigator = () => (
<Stack.Navigator initialRouteName="Home" 
 screenOptions={{
  cardStyleInterpolator:
  CardStyleInterpolators.forHorizontalIOS
}}>
<Stack.Screen name ="Home" component={Home} options={{headerShown:false}}/>
<Stack.Screen name ="Comment" component={CommentScreen} options={{headerShown:false}} />
<Stack.Screen name="Calander" component={Calander} options={{headerShown:false}}/>
</Stack.Navigator>

)











const ProfileNavigator = () => (
  <Stack.Navigator initialRouteName="Userprofile"
  screenOptions={{
    gestureEnabled:true,
    gestureDirection:"horizontal",
    cardStyleInterpolator:
    CardStyleInterpolators.forHorizontalIOS
  }}
  >
    <Stack.Screen name="Userprofile" component={DrawerUser} options={{headerShown:false}}/>
    <Stack.Screen name="EditProfile" component={EditProfile} options={{headerShown:false}}/>
    </Stack.Navigator>


)

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
    <Tab.Navigator
    tabBarOptions={{

      activeTintColor:colors.blue,
      inactiveTintColor:colors.textblack
    }}>
      <Tab.Screen name="Home" component={HomeNavigator} options={{
          tabBarIcon:({size,color})=> <FontAwesome5 name="home" size={24} color="black" size={size} color={color}/>
        }}/>
        <Tab.Screen name="Products" component={ProductNavigator}
        options={{tabBarIcon:({size, color})=> <Feather name="box" size={24} color="black" size={size} color={color} />}}
        />
        <Tab.Screen name="Profile" component={ProfileNavigator} options={{
          tabBarIcon:({size,color})=> <FontAwesome5 name="user-circle" size={24} color="black" size={size} color={color}/>
        }}/>
    </Tab.Navigator>
)









export default function Final() {
  
  return (
   <>
   <NavigationContainer>
    <TabNavigator/>
   </NavigationContainer>

   </>
 
  );
}

