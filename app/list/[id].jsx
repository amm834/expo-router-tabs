import React from 'react';
import {SafeAreaView, Text, View} from "react-native";
import {useSearchParams} from "expo-router";
import {Surface} from "@react-native-material/core";

const List = () => {
    const params = useSearchParams()
    const id = params?.id
    return (
        <SafeAreaView>
            <Surface
                elevation={2}
                category="medium"
                style={{
                    width: "80%",
                    height: 400,
                    marginVertical: "10%",
                    marginHorizontal: "10%",
                }}
            >
                <Text style={{
                    textAlign:"center",
                }}>List {id}</Text>
            </Surface>
        </SafeAreaView>
    );
};

export default List;
