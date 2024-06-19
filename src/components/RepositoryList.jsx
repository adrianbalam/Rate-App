import React from "react";
import Constants from 'expo-constants';
import {Text, View, FlatList} from 'react-native';
import RepositoryItem from "./RepositoryItem.jsx";
import useRepositories from "../hooks/useRepositories.js";

const RepositoryList = () => {

    const {repositories} = useRepositories()

    return (
        <FlatList
            data={repositories}
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({item:repo})=> (
                <RepositoryItem {...repo}/>
            )}
        />
    )
}

export default RepositoryList