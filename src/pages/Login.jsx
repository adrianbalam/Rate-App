import React from "react";
import { Formik, useField } from "formik";
import { SafeAreaView,View, Text, StyleSheet, TextInput, Button} from 'react-native'
import StyledTextInput from "../components/StyledTextInput.jsx";
import StyledText from "../components/StyledText.jsx";
import { loginValidationSchema } from "../validationSchemas/login.js";

const valoresInicio = {
    email: '',
    password: ''
}

const FormikInputValue = ({name,...props}) => {
    const [field, meta, helpers] = useField(name)

    return (
        <>
            <StyledTextInput error={meta.error} value={field.value} onChangeText={value => helpers.setValue(value)} {...props}/>
            {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        marginTop: 12,
        borderWidth: 1,
        padding: 10
    },
    form: {
        marginTop: 250
    },
    error: {
        color: 'red'
    }
})

/*const validate = values => {
    const errors = {}
    if(!values.email){
        errors.email = 'Email is required'
    }else if (!/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}$/i.test(values.email)){
        errors.email = 'Invalid email address'
    }

    console.log(errors)

    return errors
}*/

export default function LoginPage () {
    return (
            <Formik initialValues={valoresInicio} validationSchema={loginValidationSchema} onSubmit={values => console.log(values)}>
                {({handleChange,handleSubmit,values}) => {
                    return (
                        <SafeAreaView style={styles.form}>
                        <FormikInputValue style={styles.input} placeholder="Email" name='email'/>
                        <FormikInputValue style={styles.input} placeholder="Password" name='password' secureTextEntry/>
                        <Button onPress={handleSubmit} title="Log In"/>
                        </SafeAreaView>
                    )
                }}
            </Formik>
    )
}