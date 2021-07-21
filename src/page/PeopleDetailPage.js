import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import Line from '../components/Line'

//Class Component
export default class PeopleDetailPage extends React.Component{
	render(){
		const { people } = this.props.navigation.state.params;
		return(
			<View style = { styles.container }>
				<Image 
					source = {{ uri: people.picture.large }}
					style = {styles.avatar}/>

				<View style = { styles.detailContainer }>
					<Line label = "Email: " content={people.email}/>
					<Line label = "Estado: " content={people.location.state}/>
					<Line label = "Cidade: " content={people.location.city}/>
					<Line label = "Telefone: " content={people.phone}/>
					<Line label = "Celular: " content={people.cell}/>
					<Line label = "Nacionalidade: " content={people.nat}/>
				</View>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container: {
		padding: 15
	},
	avatar: {
		aspectRatio: 1,
		borderRadius: 185,
		borderWidth: 1		
	},
	detailContainer: {
		backgroundColor: '#FFF8F4',
		marginTop: 20,
		shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.2
	}
});