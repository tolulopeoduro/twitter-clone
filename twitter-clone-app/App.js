import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import EStyleSheet from "react-native-extended-stylesheet"
import Screen from './containers/Screen/Screen';
 
EStyleSheet.build({ // always call EStyleSheet.build() even if you don't use global variables!
  $textColor: '#0275d8'
});

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Screen/>
    </View>
  );
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems : 'center',
    width : "100%"
  },
  txt : {
    fontSize : "5rem",
    color : "blue"
  }
});
