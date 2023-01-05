import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { View, StyleSheet, Text } from "react-native";
import Searchbar from "../SearchBar/Searchbar";

export default function Header() {
    return (
        <View style={style.container}>
            <FontAwesomeIcon icon={faTwitter} size="1.5em" color="#fff" />
            <Searchbar />
            <FontAwesomeIcon icon={faEllipsis} color="#fff" size="1.5em" />
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        height: "3em",
        backgroundColor: "rgba(0,0,0,0.5)",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: "1em",
        justifyContent: "space-between",
        boxSising: "border-box",
    },
});
