import { StyleSheet } from "react-native";


export const GlobalStyles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:"upcenter",
        alignItems:"upcenter",
        padding:20
    },


    title:{
        fontSize:28,
        fontWeight:"bold",
        marginBottom:20
    },


    text:{
        fontSize:18,
        marginBottom:10
    },


    button:{
        backgroundColor:"#333",
        padding:15,
        borderRadius:10,
        marginTop:10
    },


    buttonText:{
        color:"white",
        fontSize:16
    },


    card:{
        width:"90%",
        padding:15,
        margin:10,
        backgroundColor:"#eee",
        borderRadius:10
    }

});