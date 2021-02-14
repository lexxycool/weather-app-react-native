import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Picker } from '@react-native-community/picker';






export default function UnitsPicker({unitSystem, setUnitSystem}) {
    return (
			<View style={styles.unitStyle}>
				<Picker
					style={{ color: 'red' }}
					mode='dropdown'
					selectedValue={unitSystem}
					onValueChange={(val) => setUnitSystem(val)}
				>
					<Picker.Item label='Fahrenheit' value='imperial' />
					<Picker.Item label='Celsius' value='metric' />
					<Picker.Item label='Kelvin' value='default' />
				</Picker>
			</View>
		);
}


const styles = StyleSheet.create({
	unitStyle: {
		position: 'absolute',
		...Platform.select({
			ios: {
				top: -30,
			},
			android: {
				top: 50
			},
		}),
		left: -100,
		height: 50,
		width: 180,
	
	},
})
