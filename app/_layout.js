import React from 'react';
import {Stack} from "expo-router";

const _Layout = () => {
    return (
        <Stack>
            <Stack.Screen
                name="(tabs)"
                options={{
                    headerShown: false,
                }}
            />
        </Stack>
    )
};

export default _Layout;
