import React, { Component } from 'react';
import { StyleSheet, Image, View, Text } from "react-native";
import colors from "../config/colors";
import TextList from '../components/TextList';

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJtYWlsIjoidXNlckB1c2VyLnVzZXIiLCJpc3MiOiJhdXRoMCIsImlkIjozLCJ1c2VybmFtZSI6InVzZXIiLCJ0aW1lc3RhbXAiOjE1NjE1NTMzNjQsImluZm8iOiJWb2ljaSB1bmUgaW5mbyBhYnNvbHVtZW50IGludXRpbGUganVzdGUgcG91ciBxdWUgbGUgdG9rZW4gZ3JhbmRpc3NlLiJ9.oWFVre6yBfWgMlentwRfoKJsA0eouDBU8rv1gvEPuHg'

class DevicesScreen extends React.Component {
    state = {
        devices: [],
    };

    componentWillMount() {
        this.getDevices();
    }


    getDevices() {
        fetch("10.151.129.35:8080/device/", {
            method: 'GET',
            headers: {
                // 'Authorization': 'Bearer ' + this.state.clientToken,
                'Authorization': token
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    devices: responseJson.devices,
                });
            })
            .catch((error) => { console.log(error); });
    }

    render() {
        // <View style={styles.container}>
        //     <Image source={imageLogo} style={styles.logo} />
        //     <View style={styles.form}>
        //         <FormTextInput
        //             value={this.state.email}
        //             onChangeText={this.handleEmailChange}
        //             placeholder={strings.EMAIL_PLACEHOLDER}
        //         />
        //         <FormTextInput
        //             value={this.state.password}
        //             onChangeText={this.handlePasswordChange}
        //             placeholder={strings.PASSWORD_PLACEHOLDER}
        //         />
        //         <Button
        //             onPress={this.handleLoginPress}
        //             title="Learn More"
        //             color="#841584"
        //             accessibilityLabel="Learn more about this purple button"
        //         />
        //         <ButtonSignUp
        //             title="Learn More"
        //             color="#841584"
        //             accessibilityLabel="Learn more about this purple button"
        //         />
        //     </View>
        // </View>
        return (
            <View style={styles.container}>
                {/* {this.state.devices.map(device => (
                    <React.Fragment>
                        <Text style={styles.quote}>
                            {device.id}
                        </Text>
                        <Text style={styles.author}>
                            {device.type}
                        </Text>
                        <Text style={styles.author}>
                            {device.macAddress}
                        </Text>
                    </React.Fragment>
                ))} */}
                <TextList data={this.state.devices} style={styles.quote}
                    renderItem={({ item }) => <Text>{item.id}, {item.type}, {item.macAddress}</Text>}
                    keyExtractor={({ id }, index) => id}
                />
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

export default DevicesScreen;
