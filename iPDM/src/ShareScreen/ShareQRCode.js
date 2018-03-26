'use strict';

import React, { Component } from 'react'
import QRCode from 'react-native-qrcode';

import {
    StyleSheet,
    View,
    TextInput
} from 'react-native';

export default class ShareQRCode extends Component {
    state = {
        text: 'http://facebook.github.io/react-native/',
    };

    render() {
        return (
            <View style={styles.container}>
                <QRCode
                    value={this.state.text}
                    size={200}
                    bgColor='purple'
                    fgColor='white'/>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height:220,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
