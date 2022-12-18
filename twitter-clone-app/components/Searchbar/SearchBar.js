import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { View, Pressable, TextInput, StyleSheet } from "react-native";

export default function Searchbar() {
    return (
        <View style={styles.container}>
            <Pressable style={[styles.searchBar, styles.button]}>
                <FontAwesomeIcon icon={faMagnifyingGlass} size="1em" color="#6E7378" />
            </Pressable>
            <TextInput style={[styles.searchBar, styles.input]} placeholder="SearchTwitter" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.8,
        flexDirection: "row",
        height: "1.8em",
    },
    searchBar: {
        backgroundColor: "#202327",
        borderRadius: "1em",
        height: "100%",
        borderWidth: "0px",
        borderColor: "#202327",
    },
    button: {
        borderTopRightRadius: "0px",
        borderBottomRightRadius: "0px",
        width: "2.5em",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#202327",
    },
    input: {
        borderTopLeftRadius: "0px",
        borderBottomLeftRadius: "0px",
        color: "#6E7378",
        width: "100%",
    },
});
