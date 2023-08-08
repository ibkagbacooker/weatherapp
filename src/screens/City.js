import { StatusBar } from "expo-status-bar";
import React from "react";
import IconText from "../components/iconText";
import city from '../../assets/city-background.jpg' 
import { SafeAreaView,View,ImageBackground, StyleSheet,Text } from "react-native";
import {Feather} from '@expo/vector-icons'
import moment from "moment";
const City = ({weatherData}) =>{
    const{ container,rowLayout, cityName, cityText, countryName, populationWrapper, populationText, riseSetWrapper, riseSetText, imageLayout} = styles

    const {name, country, population, sunrise, sunset} = weatherData
    return(
        <SafeAreaView style = {container}>
           <ImageBackground source={city} style={imageLayout}>
            <Text style= { [cityName, cityText]}>{name}</Text>
            <Text style= {[countryName, cityText]}>{country}</Text>
            <View style = {[populationWrapper, rowLayout]}>
            <IconText iconName={'user'}
             iconColor={'red'} 
             bodyText={`Population: ${population}`} 
             bodyTextStyles ={populationText}/>
            </View>
            
            <View style={[riseSetWrapper, rowLayout]}>
            <IconText iconName={'sunrise'}
             iconColor={'white'} 
             bodyText={moment(sunrise).format('h:mm:ss a')} 
             bodyTextStyles ={riseSetText}/>

            <IconText iconName={'sunset'}
             iconColor={'white'} 
             bodyText={moment(sunset).format('h:mm:ss a')} 
             bodyTextStyles ={riseSetText}/>   
            </View>
           </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: { 
        height:'100%',
        marginTop: StatusBar.currentHeight,

    }, 

    imageLayout:{
        height:'100%' 
    }, 
    cityName:{
        
        fontSize:40,
        
    },
    countryName:{
        
        fontSize:30,
        

    },

    cityText:{
        justifyContent: "center",
        alignSelf: "center",
        fontWeight: 'bold',
        color:'white'
    },
    populationWrapper:{
       
        justifyContent:'center',
        marginTop:30
    },
    populationText:{
        fontSize:25,
        marginLeft:7.5,
        color: "red"
        

    },
    riseSetWrapper:{
        
        justifyContent:'space-around',
        marginTop:30
    },
    riseSetText:{
        fontSize:20,
        color:'white',
        

    },
    rowLayout:{
        flexDirection:'row',
        alignItems:"center"
    }


    


})
export default City