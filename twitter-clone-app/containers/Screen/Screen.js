import { StyleSheet, Text, View } from "react-native";
import LeftView from "../LeftView/LeftView";
import MainView from "../MainView/MainView";
import RightView from "../RightView/RightView";

export default function Screen() {
    return (
        <View style={styles.container}>
            <LeftView />
            <MainView />
            <RightView />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000000",
        flex: 1,
        flexDirection: "row",
    },
});
