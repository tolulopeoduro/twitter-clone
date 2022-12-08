import React from "react";
import { View, StyleSheet, Text } from "react-native";

const LeftView = () => {
    return (
        <View style={styles.container}>
            <Text>Hello</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0.23,
        backgroundColor: "#000",
        boxSizing: "border-box",
        borderRightColor: "#2F3237",
        borderRightWidth: "1px",
    },
});

export default LeftView;
