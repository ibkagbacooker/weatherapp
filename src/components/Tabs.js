import React from 'react'
import { SafeAreaView, Text} from 'react-native'
import{StatusBar} from 'expo-status-bar'
import CurrentWeather from '../screens/CurrentWeather'
import UpcomingWeather from '../screens/UpcomingWeather'
import Constants from 'expo-constants'
import City from '../screens/City' 
import { NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Feather} from '@expo/vector-icons'
const Tab = createBottomTabNavigator()

const Tabs = ({ weather }) =>{
  // console.log("weather: ",weather.list[0])
 const  weather1 = weather.list[0]
 const  weather2 = weather.list
 
    return(
      
        <Tab.Navigator 
        screenOptions={{
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'grey',
          tabBarStyle:{
            backgroundColor:'lightblue'
          },
          headerStyle:{
            backgroundColor:'lightblue'
          },
          headerTitleStyle:{
            fontWeight: 'bold',
            fontSize: 25,
            color: 'tomato'
          }
        }}>
       
        <Tab.Screen 
          name='Current' 
          component={CurrentWeather }
          initialParams={{ weatherData: weather1 }}
           options={{
            tabBarIcon:({ focused }) =>(
                <Feather 
                name={'droplet'}
                size={25}
                color={focused ? 'tomato': 'black'}/>
              )
            }}

        >  
        {/* {() => <CurrentWeather weatherData={weather1} />} */}
          </Tab.Screen>

        <Tab.Screen name={'Upcoming'} 
        
        
        options={{
          tabBarIcon:({focused})=>(
            <Feather
            name={'clock'}
            size={25}
            color={ focused? 'tomato': 'black'}/>
          )
        }}>
          {()=> <UpcomingWeather weatherData={weather.list}/>}
          </Tab.Screen> 
        <Tab.Screen name={'City'}
         
         options={{
          tabBarIcon:({focused}) =>(
            <Feather
            name={'home'}
            size={25}
            color={focused? 'tomato': 'black'}/>
          )
        }}>{()=> <City weatherData={weather.city}/>}</Tab.Screen>   
  
       
          
        
        </Tab.Navigator>
        
      
    )
  }
  
  
  export default Tabs