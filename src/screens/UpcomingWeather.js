import React from "react"
import { StyleSheet,  ImageBackground, SafeAreaView, FlatList} from "react-native"
import{Feather} from '@expo/vector-icons'
import{StatusBar} from 'expo-status-bar'
import ListItem from "../components/Listitem"

// const DATA = [
                
//     {
//         dt_txt: "2022-08-30 17:00:00",
//         main: {
//             "temp_min": 292.84,
//             "temp_max": 294.94
//         },
//         weather: [
//             {
//                 main: 'Clear'
//             }
//         ]

//     },
//     {
//         dt_txt: "2022-02-30 12:00:00",
//         main: {
//             "temp_min": 300.84,
//             "temp_max": 394.94
//         },
//         weather: [
//             {
//                 main: 'Cloudy'
//             }
//         ]
//     },
//     {
//         dt_txt: "2022-11-30 16:00:00",
//         main: {
//             "temp_min": 123.84,
//             "temp_max": 222.94
//         },
//         weather: [
//             {
//                 main: 'Rainy'
//             }
//         ]
//     }   
// ]

const UpcomingWeather = ({weatherData}) => {
    

    
    
    const renderItem = ({item}) =>(
        <ListItem 
        condition = {item.weather[0].main}
        dt_txt={item.dt_txt} 
        min={item.main.temp_min} 
        max={item.main.temp_max}/>
    )
    
    const { container, image } = styles

    return(
        <SafeAreaView styles={container}>
            <ImageBackground source={require('../../assets/upcoming-background.jpg')} style = {image}>
           <FlatList 
           data={weatherData}
            renderItem ={renderItem}
             keyExtractor={(item) => item.dt_txt}/>   
            </ImageBackground>
        </SafeAreaView> 
        
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'royalblue'
       
    },
   
    image:{
       height :'100%'
    }

 
})
export default UpcomingWeather 