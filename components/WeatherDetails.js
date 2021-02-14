import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/index';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'


const {PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR} = colors;

export default function WeatherDetails({currentWeather}) {

    const {
        main: {feels_like, humidity},
    } = currentWeather;

    return (
			<View style={styles.details}>
				<View style={styles.detailsRow}>
					<View style={{...styles.detailsBox, borderRightWidth:1, borderRightColor: BORDER_COLOR}}>
                        <View style={styles.detailsRow}>
                             <FontAwesome5 name='temperature-low' size={25} color={PRIMARY_COLOR} />
                             <View>
                                    <Text>Feels like:</Text>
						            <Text>{feels_like}F</Text>
                             </View> 
                        </View>
					</View>
					<View style={styles.detailsBox}>
						<Text>{humidity}</Text>
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
})