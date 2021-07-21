import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PeoplePage from './src/page/PeoplePage';
import PeopleDetailPage from './src/page/PeopleDetailPage';

const StackNavigator = createStackNavigator({
  'Main': {
    screen: PeoplePage
  },
  'PeopleDetail': {
    screen: PeopleDetailPage,
    navigationOptions: ({ navigation }) => {
      const peopleFirstName = navigation.state.params.people.name.first;
      const peopleLastName = navigation.state.params.people.name.last;
      return ({
        title: peopleFirstName + ' ' + peopleLastName,
        headerTitleStyle: {
          color: '#FFF8F4',
          fontSize: 25
        }
      });
    }
  }
}, {
  defaultNavigationOptions: {
      title: 'Contatos',
      headerTintColor: '#FFF8F4',
      headerStyle: {
        backgroundColor: '#FAA799',
        borderBottomWidth: 1,
        borderBottomColor: '#7AC8AE'
      },
      headerTitleStyle: {
        color: '#FFF8F4',
        fontSize: 28,
        flexGrow: 1,
        textAlign: 'center'
      }
  }
});

const AppContainer = createAppContainer(StackNavigator);

export default AppContainer;