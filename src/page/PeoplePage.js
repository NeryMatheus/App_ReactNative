import React from 'react';
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';

import PeopleList from '../components/PeopleList';

import axios from 'axios';


export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      peoples: [],
      loading: false,
      error: false
    };
  }

  componentDidMount(){
    this.setState({loading: true});
    setTimeout(() => {
      axios
        .get('https://randomuser.me/api/?nat=br&results=50')
        .then(response => {
            const { results } = response.data;
            this.setState({
              peoples: results,
              loading: false
            });
        }).catch(error => {
          this.setState({ loading: false, error: true })
        });
    }, 2500)
  }


///////////////////////////////////////////////////////////////////////
  render(){
  return (
      <View style = {styles.container}>
        {
          this.state.loading
            ?<ActivityIndicator size="large" color="#FAA799"/>
            : this.state.error
              ? <Text style={styles.error}>Ops..... Algo deu errado =( </Text>
              :<PeopleList 
                  peoples={ this.state.peoples }
                  onPressItem={pageParams => {
                    this.props.navigation.navigate('PeopleDetail', pageParams);
                }}
              />
        }
      </View>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  error: {
    color: '#FAA799',
    fontSize: 18,
    alignSelf: 'center'
  }
});