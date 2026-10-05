import {
    View,
    Text,
    TouchableOpacity
} from "react-native";


import { GlobalStyles } from "../globalStyles";



export default function MovieDetailsScreen({route,navigation}){
    const movie = route.params;

    return(
        <View style={GlobalStyles.container}>
            <Text style={GlobalStyles.title}>
                {movie.title}
            </Text>
            <Text style={GlobalStyles.text}>
                Year: {movie.year}
            </Text>
            <Text style={GlobalStyles.text}>
                {movie.description}
            </Text>
            <TouchableOpacity
                style={GlobalStyles.button}
                onPress={()=>navigation.goBack()}
            >
                <Text style={GlobalStyles.buttonText}>
                    Go Back
                </Text>
            </TouchableOpacity>
        </View>
    );
}