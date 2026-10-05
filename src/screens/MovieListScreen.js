import React from "react";

import {
    View,
    Text,
    TouchableOpacity
} from "react-native";


import { GlobalStyles } from "../globalStyles";


export default function MovieListScreen({navigation}){
    const movies = [
        {
            id:1,
            title:"Spider-Man",
            year:"2021",
            description:"A superhero movie about Spider-Man."
        },


        {
            id:2,
            title:"Interstellar",
            year:"2014",
            description:"A science fiction movie about space travel."
        },


        {
            id:3,
            title:"Frozen",
            year:"2013",
            description:"An animated movie about two sisters."
        }

    ];

    return(
        <View style={GlobalStyles.container}>
            <Text style={GlobalStyles.title}>
                Movie List
            </Text>
            {
                movies.map((movie)=>(
                    <TouchableOpacity
                        key={movie.id}
                        style={GlobalStyles.card}
                        onPress={()=>navigation.navigate(
                            "MovieDetails",
                            movie
                        )}
                    >
                        <Text style={GlobalStyles.text}>
                            {movie.title}
                        </Text>
                        <Text>
                            Year: {movie.year}
                        </Text>
                    </TouchableOpacity>
                ))
            }
        </View>
    );
}