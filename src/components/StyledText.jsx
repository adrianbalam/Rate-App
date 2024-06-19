import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import theme from "../theme.js";

const styles = StyleSheet.create({
    titulo: {
        fontSize: theme.tamanios.textoGrande,
        fontWeight: 'bold',
        color: theme.colores.colorPrimario
    },
    subtitulo: {
        fontSize: theme.tamanios.textoPequenio,
        fontStyle: 'italic',
        color: theme.colores.colorSecundario
    }
})

export default function StyledText ({texto, children, style}) {
    const textStyles = [
        texto === 'titulo' && styles.titulo,
        texto === 'subtitulo' && styles.subtitulo,
        style
    ]

    return (
        <Text style={textStyles}>{children}</Text>
    )
}