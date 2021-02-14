import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';



const WEATHER_API_KEY = '84cc771f30cf0ecd91e5a66af3173959';

const BASE_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?';

const zip_code = 79703;



export default function App() {

  const [errorMessage, setErrorMessage] = useState(null);

  const [currentWeather, setCurrentWeather] = useState(null);

  const [unitSystem, setUnitSystem] = useState('imperial')

  useEffect(() => {
      load()
  }, [])

  async function load() {
    try {
        let { status } = await Location.requestPermissionsAsync();

         if (status !== 'granted') {
            setErrorMessage('Access to location is needed to run the app')
         }

         const location = await Location.getCurrentPositionAsync();

         const weatherUrl = `${BASE_WEATHER_URL}zip=${zip_code}&units=${unitSystem}&appid=${WEATHER_API_KEY}`;

         const {latitude, longitude} = location.coords;
     

         const response = await fetch(weatherUrl);

         
         const result = await response.json();
        
         
         if(response.ok) {
           setCurrentWeather(result);

         } else {
           setErrorMessage(result.message);
           
         }
         

    } catch(error) {
        setErrorMessage(error.message);
    
    }
  }
  if(currentWeather) {

    const { main: { temp } ,
        

    } = currentWeather;
  
    return (
			<View style={styles.container}>
				<View style={styles.main}>
					<StatusBar style='auto' />
					<Text>{temp}</Text>
				</View>
			</View>
		);

  } else {
    
       return (
			<View style={styles.container}>
				<Text>{errorMessage}</Text>
				<StatusBar style='auto' />
			</View>
		); 
  
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  main: {
    flex: 1,
    justifyContent: 'center'
  }
  });