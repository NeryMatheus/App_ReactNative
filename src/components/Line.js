import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Line = ({label = "", content = "-"}) => {
	return (

		<View style = { styles.line }>
			<Text style = { [
				styles.cell, 
				styles.label, 
				label.length > 10 ? styles.longLabel : null
				]}> { label } </Text>
			<Text style = { [styles.cell, styles.content] }> { content } </Text>
		</View>

	);
}

const styles = StyleSheet.create({
	line:{
		flexDirection: 'row',
		paddingTop: 3,
		paddingBottom: 3,
		borderWidth: 0.5
	},
	cell: {
		fontSize: 17	
	},
	label: {
		fontWeight: 'bold',
		flex: 1
	},
	content: {
		flex: 3
	},
	longLabel: {
		fontSize: 13
	}
});

export default Line;