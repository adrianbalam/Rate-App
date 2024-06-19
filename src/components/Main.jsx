import React from "react";
import Constants from 'expo-constants'
import {Text, View, ScrollView, Platform} from "react-native";
import RepositoryList from "./RepositoryList.jsx";
import Login from "../pages/Login.jsx";
import {Route, Routes, Navigate} from "react-router-native";
import AppBar from "./AppBar";

/*const AppBar = Platform.select({
    ios: () => require('./IosAppBar.jsx').default,
    android: () => require('./AppBar.jsx').default
})()*/

const Main = () => {
    return (
        <View>
            <AppBar/>
            <Routes>
                <Route path="/" element={<RepositoryList/>}/>
                <Route path="/tab2" element={<Login/>}/>
            </Routes>
        </View>
    )
}

export default Main