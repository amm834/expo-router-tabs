import React from 'react';
import {Stack} from "expo-router";

const _Layout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{
                title: "Home"
            }}/>
        </Stack>
    );
};

export default _Layout;
