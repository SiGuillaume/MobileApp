import * as React from "react";
import { StyleSheet, TextInput, Text } from "react-native";
import colors from "../config/colors";

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJtYWlsIjoidXNlckB1c2VyLnVzZXIiLCJpc3MiOiJhdXRoMCIsImlkIjozLCJ1c2VybmFtZSI6InVzZXIiLCJ0aW1lc3RhbXAiOjE1NjE1NTMzNjQsImluZm8iOiJWb2ljaSB1bmUgaW5mbyBhYnNvbHVtZW50IGludXRpbGUganVzdGUgcG91ciBxdWUgbGUgdG9rZW4gZ3JhbmRpc3NlLiJ9.oWFVre6yBfWgMlentwRfoKJsA0eouDBU8rv1gvEPuHg'

class TextList extends React.Component {
    state = {
        devices: [],
    }

    componentDidMount() {
        this.getDevices();
    }

    getDevices() {
        fetch("10.151.129.35:8080/device/", {
            method: 'GET',
            headers: {
                // 'Authorization': 'Bearer ' + this.state.clientToken,
                'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJtYWlsIjoidXNlckB1c2VyLnVzZXIiLCJpc3MiOiJhdXRoMCIsImlkIjozLCJ1c2VybmFtZSI6InVzZXIiLCJ0aW1lc3RhbXAiOjE1NjE1NTMzNjQsImluZm8iOiJWb2ljaSB1bmUgaW5mbyBhYnNvbHVtZW50IGludXRpbGUganVzdGUgcG91ciBxdWUgbGUgdG9rZW4gZ3JhbmRpc3NlLiJ9.oWFVre6yBfWgMlentwRfoKJsA0eouDBU8rv1gvEPuHg'
            }
        })
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                this.setState({
                    devices: response.devices,
                });
            })
            .catch((error) => { console.log(error); });
    }
    render() {
        const { style, ...otherProps } = this.props;
        return (
            // this.state.devices.map(device => {
            //     <Text> {device.id}</Text>
            // })
            <Text></Text>
        )
    }
}

export default TextList;