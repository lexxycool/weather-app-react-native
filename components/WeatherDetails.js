import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/index';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'


const {PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR} = colors;

export default function WeatherDetails({currentWeather, unitSystem}) {

    const {
        main: { feels_like, humidity },
        wind: { speed },
        clouds: { all },
    } = currentWeather;

    const windSpeed =
			unitSystem == 'imperial'
				? `${Math.round(speed)} miles/hr`
				: `${Math.round(speed)} meters/sec`; 

    return (
			<View style={styles.details}>
				<View style={styles.detailsRow}>
					<View
						style={{
							...styles.detailsBox,
							borderRightWidth: 1,
							borderRightColor: BORDER_COLOR,
						}}
					>
						<View style={styles.detailsRow}>
							<FontAwesome5
								name='temperature-low'
								size={25}
								color={PRIMARY_COLOR}
							/>
							<View style={styles.detailsItems}>
								<Text style={styles.textStyle}>Feels like:</Text>
								<Text>{feels_like}</Text>
							</View>
						</View>
					</View>
					<View style={styles.detailsBox}>
						<View style={styles.detailsRow}>
							<MaterialCommunityIcons
								name='water'
								size={30}
								color={PRIMARY_COLOR}
							/>
							<View style={styles.detailsItems}>
								<Text style={styles.textStyle}>Humidity:</Text>
								<Text>{humidity} %</Text>
							</View>
						</View>
					</View>
				</View>
				<View style={{...styles.detailsRow, borderTopWidth: 1, borderTopColor: BORDER_COLOR}}>
					<View
						style={{
							...styles.detailsBox,
							borderRightWidth: 1,
							borderRightColor: BORDER_COLOR,
						}}
					>
						<View style={styles.detailsRow}>
							<MaterialCommunityIcons
								name='weather-windy'
								size={30}
								color={PRIMARY_COLOR}
							/>
							<View style={styles.detailsItems}>
								<Text style={styles.textStyle}>Windspeed:</Text>
								<Text>{windSpeed}</Text>
							</View>
						</View>
					</View>
					<View style={styles.detailsBox}>
						<View style={styles.detailsRow}>
							<MaterialCommunityIcons
								name='weather-cloudy'
								size={30}
								color={PRIMARY_COLOR}
							/>
							<View style={styles.detailsItems}>
								<Text style={styles.textStyle}>Cloud:</Text>
								<Text>{ all } %</Text>
							</View>
						</View>
					</View>
				</View>
			</View>
		);
}


const styles = StyleSheet.create({
    details: {
        margin: 15,
        borderWidth: 1,
        width: 380,
        borderColor: BORDER_COLOR,
        borderRadius: 5,
        
    },
    detailsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    detailsBox: {
        flex: 1,
        padding: 20,
    },
    detailsItems: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    textStyle: {
        fontSize: 15,
        color: SECONDARY_COLOR,
        margin:7,
    },
})