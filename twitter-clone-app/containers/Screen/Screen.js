import { StyleSheet, Text, View } from "react-native"
import EStyleSheet from "react-native-extended-stylesheet";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

EStyleSheet.build({ // always call EStyleSheet.build() even if you don't use global variables!
    $textColor: '#0275d8'
});

export default function Screen () {
    return (
        <View style={style.container}>
            <Header/>
            <Footer/>
        </View>
    )
}

const style = EStyleSheet.create({
    container : {
        paddingTop : '1.3rem',
        width : "100%",
        flex : 1,
        justifyContent : "space-between"
    }
})