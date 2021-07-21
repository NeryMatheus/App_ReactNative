/*
O primieor Header a gente nunca esquece kkkk
Não estou mais utilizando esse header
Mas vai ficar ai para eu me lembrar de alguns conceitos quando eu for querer usar props....
*/

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Header = (props) => (
	<View style = { style.container }>
		<Text style= { style.title }> { props.title } </Text>
	</View>
);


/* StyleSheet 
const style = StyleSheet.create({
	container: {
		marginTop: 20,
		backgroundColor: '#FAA799',
		alignItems: 'center',
		justifyContent: 'center'
		
	},
	title: {
		fontSize: 55,
		color: '#FFF8F4',
	}
})
*/

export default Header;