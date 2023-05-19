import React from 'react';
import {Tabs} from "expo-router";

const _TabLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen name={"home"} options={{title: "Home", headerShown: false}}/>
            <Tabs.Screen name={"list"} options={{title: "List"}}/>
        </Tabs>
    );
};

export default _TabLayout;
