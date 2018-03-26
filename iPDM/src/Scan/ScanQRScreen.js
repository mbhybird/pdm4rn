'use strict';

import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    NavigatorIOS,
    TouchableOpacity,
    Linking,
    Alert
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

class ScanQRScreen extends Component {
    onSuccess(e) {
        //Linking.openURL(e.data).catch(err => console.error('An error occured', err));
        console.log(
            "Barcode Found!",
            "Type: " + e.type + "\nData: " + e.data
        );
        this.props.navigation.navigate("Home");
    }

    render() {
        return (
            <NavigatorIOS
                initialRoute={{
                    component: QRCodeScanner,
                    title: 'Scan Code',
                    passProps: {
                        onRead: this.onSuccess.bind(this),
                        topContent: (
                            <Text style={styles.centerText}>
                                Scan the QR code.
                            </Text>
                        ),
                        bottomContent: (
                            <TouchableOpacity style={styles.buttonTouchable}>
                                <Text style={styles.buttonText}>OK. Got it!</Text>
                            </TouchableOpacity>
                        ),
                    },
                }}
                style={{ flex: 1 }}
            />
        );
    }
}

const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: 18,
        marginTop:20,
        padding: 48,
        color: '#777',
    },

    textBold: {
        fontWeight: '500',
        color: '#000',
    },

    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)',
    },

    buttonTouchable: {
        padding: 16,
    },
});

module.exports = ScanQRScreen;