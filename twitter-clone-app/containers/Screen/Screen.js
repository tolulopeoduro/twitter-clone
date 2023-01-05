import { StyleSheet, Text, View } from "react-native";
import Header from "../../components/Header/Header";

export default function Screen() {
    return (
        <View style={styles.container}>
            <Header />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000000",
        flex: 1,
        display: "flex",
        alignContent: "space-between",
        flexDirection: "column",
    },
});
