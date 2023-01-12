import { faBell, faEnvelope, faHome, faMagnifyingGlass, faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Text, View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

export default function Footer () {
    return (
        <View style={styles.container}>
            <FontAwesomeIcon icon={faHome} color="white" size={25}/>
            <FontAwesomeIcon icon={faMagnifyingGlass} color="white" size={25}/>
            <FontAwesomeIcon icon={faMicrophone} color="white" size={25}/>
            <FontAwesomeIcon icon={faBell} color="white" size={25}/>
            <FontAwesomeIcon icon={faEnvelope} color="white" size={25}/>
        </View>
    )
}


const styles = EStyleSheet.create({
    container : {
        borderTopColor : "gray",
        borderTopWidth : 1,
        height : "3rem",
        justifyContent : "space-between",
        alignItems : "center",
        paddingHorizontal : "1rem",
        flexDirection : "row"
    }
})