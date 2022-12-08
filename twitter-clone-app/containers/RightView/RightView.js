import { View, StyleSheet, Text } from "react-native";

const RightView = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0.33,
        backgroundColor: "#000",
        boxSizing: "border-box",
        borderLeftColor: "#2F3237",
        borderLeftWidth: "1px",
    },
    text: {
        color: "#000",
    },
});

export default RightView;
