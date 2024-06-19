import React from "react";
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import StyledText from "./StyledText.jsx";
import Constants from 'expo-constants';
import theme from "../theme.js";
import {Link, useLocation} from 'react-router-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        paddingTop: Constants.statusBarHeight + 10,
        paddingBottom: 10,
        paddingLeft: 10,
        flexDirection: 'row'
    },
    texto: {
        color: theme.colores.colorBlanco
    },
    activo: {
        color: 'red'
    }
})

const AppBarTab = ({children,to}) => {
    const {pathname} = useLocation()
    const active = pathname === to
    const textStyles = [
        styles.texto,
        active && styles.activo
    ]
    return (
        <Link to={to} underlayColor={false}>
            <StyledText texto='titulo' style={textStyles}>{children}</StyledText>
        </Link>
    )
}

const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <AppBarTab active to='/'>Tab 1</AppBarTab>
            <AppBarTab active to='/tab2'>Tab 2</AppBarTab>
            <AppBarTab active to='/tab2'>Tab 2</AppBarTab>
            <AppBarTab active to='/tab2'>Tab 2</AppBarTab>
            <AppBarTab active to='/tab2'>Tab 2</AppBarTab>
            <AppBarTab active to='/tab2'>Tab 2</AppBarTab>
            </ScrollView>
        </View>
    )
}

export default AppBar