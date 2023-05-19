import React from 'react';
import {FlatList, View} from "react-native";
import {Link, useRouter} from "expo-router";
import {ListItem} from "@react-native-material/core";

const links = [
    {name: "List 1", href: "/list/1"},
    {name: "List 2", href: "/list/2"},
    {name: "List 3", href: "/list/3"},
    {name: "List 4", href: "/list/3"},
    {name: "List 5", href: "/list/3"},
    {name: "List 6", href: "/list/3"},
    {name: "List 7", href: "/list/3"},
    {name: "List 8", href: "/list/3"},
    {name: "List 9", href: "/list/3"},
    {name: "List 10", href: "/list/3"},
    {name: "List 10", href: "/list/3"},
    {name: "List 10", href: "/list/3"},
    {name: "List 10", href: "/list/3"},
    {name: "List 10", href: "/list/3"},
    {name: "List 10", href: "/list/3"},
    {name: "List 10", href: "/list/3"},
    {name: "List 10", href: "/list/3"},
    {name: "List 10", href: "/list/3"},
    {name: "List 10", href: "/list/3"},
]
const List = () => {
    const router = useRouter()
    return (
        <View>
            <FlatList
                data={links}
                renderItem={({item: link}) => <ListItem
                    title={link.name}
                    onPress={() => router.push(link.href)}
                />}
            />
        </View>
    );
};

export default List;
