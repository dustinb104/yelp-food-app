import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';

// Client ID
// a6E3eWhCJVWkV5pzR8dqww

// API Key
// 1VRIbiqBtrDHiYrYmvcFOePyr3vPOICHG0IsuvH3W4nlEo1645l2_abRkJhcQtJWE1XDntzSwd0u1VgaXRZe_691he4lPBemuT2hrB6e8ogOfVzYkGTAg59mVr1fYXYx

const navigator = createStackNavigator({
  Search: SearchScreen
},
{
  initialRouteName: "Search",
  defaultNavigationOptions:{
    title : "Business Search"
  }
});

export default createAppContainer(navigator);