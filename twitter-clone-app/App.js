import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Screen from "./containers/Screen/Screen";

export default function App() {
    return (
        <View style={styles.container}>
            <Screen />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
