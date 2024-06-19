import React from "react";
import {View, Text} from 'react-native'
import StyledText from "./StyledText.jsx";
import RepositoryStats from "./RepositoryStats.jsx";

const RepositoryItem = (props) => (
                <View key={props.id}>
                <StyledText texto='titulo'>ID: {props.id}</StyledText>
                <RepositoryStats {...props}/>
                </View>
)

export default RepositoryItem