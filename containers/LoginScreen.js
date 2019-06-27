import React, { Component } from 'react';
import { StyleSheet, Image, View } from "react-native";
import Button from "../components/Button";
import ButtonSignUp from "../components/ButtonSignUp";
import FormTextInput from "../components/FormTextInput";
import imageLogo from "../assets/algeco_logo.jpg";
import colors from "../config/colors";
import strings from "../config/strings";


class LoginScreen extends React.Component {

    state = {
        email: "",
        password: ""
    };

    handleEmailChange() {
        this.setState({ email: email });
    };

    handlePasswordChange() {
        this.setState({ password: password });
    }

    handleLoginPress() {
        console.log("Login button pressed");
    }

    getDevices() {
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={imageLogo} style={styles.logo} />
                <View style={styles.form}>
                    <FormTextInput
                        value={this.state.email}
                        onChangeText={this.handleEmailChange}
                        placeholder={strings.EMAIL_PLACEHOLDER}
                    />
                    <FormTextInput
                        value={this.state.password}
                        onChangeText={this.handlePasswordChange}
                        placeholder={strings.PASSWORD_PLACEHOLDER}
                    />
                    <Button
                        onPress={this.handleLoginPress}
                        title="Learn More"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                    <ButtonSignUp
                        title="Learn More"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE,
        alignItems: "center",
        justifyContent: "space-between"
    },
    logo: {
        flex: 1,
        width: "100%",
        resizeMode: "contain",
        alignSelf: "center"
    },
    form: {
        flex: 1,
        justifyContent: "center",
        width: "80%"
    }
})

export default LoginScreen;
