import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faEllipsisH, faUser, faUserCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { Text, View } from "react-native"
import EStyleSheet from "react-native-extended-stylesheet"
import SearchBar from "../SearchBar/SearchBar"

export default function Header () {
    return (
        <View style={styles.container}>
            <FontAwesomeIcon style={styles.svg} icon={faUserCircle} size={25} color={"white"}/>
            <FontAwesomeIcon style={styles.svg} icon={faTwitter} size={25} color={"#1DA1F2"}/>
            <FontAwesomeIcon icon={faEllipsisH} size={25} color={"white"}/>
        </View>
    )
}

const totalwidth = '100%'

const styles = EStyleSheet.create({
    container : {
        height : '3rem',
        width : '100%',
        backgroundColor : "#00",
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "space-between",
        paddingHorizontal : "1rem",
        borderBottomWidth : 1,
        borderBottomColor : 'grey'
    }
})