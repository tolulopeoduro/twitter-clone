import { StyleSheet, Text, View } from "react-native";

function MainView() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Yo...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.44,
        backgroundColor: "#000",
        boxSizing: "border-box",
    },
    text: { color: "white" },
});

export default MainView;
