import {
    View,
    Text,
    TouchableOpacity
} from "react-native";

import { GlobalStyles } from "../globalStyles";


export default function HomeScreen({navigation}){
    return(
        <View style={GlobalStyles.container}>
            <Text style={GlobalStyles.title}>
                🎬 Movie Explorer
            </Text>
            <Text style={GlobalStyles.text}>
                Discover popular movies
            </Text>
            <TouchableOpacity
                style={GlobalStyles.button}
                onPress={()=>navigation.navigate("MovieList")}
            >
                <Text style={GlobalStyles.buttonText}>
                    View Movies
                </Text>
            </TouchableOpacity>
        </View>
    );
}