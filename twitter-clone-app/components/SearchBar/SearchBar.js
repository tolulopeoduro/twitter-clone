import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Pressable, Text, TextInput, View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

export default function SearchBar () {
    return (
        <View style={styles.container}>
            <Pressable style={styles.button}>
                <FontAwesomeIcon icon={faMagnifyingGlass} size={15} color="white"/>
            </Pressable>
            <TextInput placeholder="Search Twitter" style={styles.input}/>
        </View>
    )
}

const styles = EStyleSheet.create({
    container : {
        width : "80%",
        height : "90%",
        borderRadius : 20,
        backgroundColor : "gray",
        flexDirection : 'row',
        alignContent : "center",
        justifyContent : "flex-start"
    },
    button : {
        width : "2rem",
        color : "white",
        justifyContent : "center",
        alignItems : "center"
    }
})