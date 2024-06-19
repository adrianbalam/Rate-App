import React from "react";
import {View,Text,StyleSheet,Image,Platform} from 'react-native';
import StyledText from "./StyledText.jsx";

const parseMiles = (value) => {
    return value >= 1000 ? `${Math.round(value/100)/10}k` : String(value)
}

const RepositoryStats = props => {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Image style={styles.img} source={{uri: props.ownerAvatarUrl}}/>
            <View style={{flexDirection: 'column'}}>
                <StyledText texto='titulo' style={styles.nombre}>NOMBRE:</StyledText>
                <StyledText texto='subtitulo'>{props.fullName}</StyledText>
            </View>
            <View style={{flexDirection: 'column'}}>
                <StyledText texto='titulo'>DESCRIPTION:</StyledText>
                <StyledText texto='subtitulo'>{props.description}</StyledText>
            </View>
            <View style={{flexDirection: 'column'}}>
                <StyledText texto='titulo'>LENG:</StyledText>
                <StyledText texto='subtitulo'>{parseMiles(props.language)}</StyledText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    nombre: {
        padding: 8,
        color: 'white',
        alignSelf: 'flex-start',
        backgroundColor: Platform.select({
            android: 'red',
            ios: 'blue',
            default: 'purple'
        }),
        borderRadius: 8,
        overflow: 'hidden',
        fontFamily: Platform.select({
            android: 'Roboto',
            ios: 'Roboto',
            default: 'System'
        })
    },
    img: {
        width: 100,
        height:100
    }
})

export default RepositoryStats