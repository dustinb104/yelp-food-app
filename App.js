import { createAppContainer } from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";

// Client ID
// a6E3eWhCJVWkV5pzR8dqww

// API Key
// 1VRIbiqBtrDHiYrYmvcFOePyr3vPOICHG0IsuvH3W4nlEo1645l2_abRkJhcQtJWE1XDntzSwd0u1VgaXRZe_691he4lPBemuT2hrB6e8ogOfVzYkGTAg59mVr1fYXYx

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
