import Home from "../HomeScreen/index.js";
import Login from "./LoginScreen.js";
import React, { Component } from 'react';
import { Easing, Animated } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ScanQRScreen from "../Scan/ScanQRScreen";
const ModalNavigator = StackNavigator(
    {
        Login: { screen: Login },
        Main: { screen: Home },
        Scanner: {screen: ScanQRScreen }
    },
    {
        headerMode: 'none',
        mode: 'modal',
        navigationOptions: {
            gesturesEnabled: false,
        },
        transitionConfig: () => ({
            transitionSpec: {
                duration: 300,
                easing: Easing.out(Easing.poly(4)),
                timing: Animated.timing,
            },
            screenInterpolator: sceneProps => {
                const { layout, position, scene } = sceneProps;
                const { index } = scene;

                const height = layout.initHeight;
                const translateY = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [height, 0, 0],
                });

                const opacity = position.interpolate({
                    inputRange: [index - 1, index - 0.99, index],
                    outputRange: [0, 1, 1],
                });

                return { opacity, transform: [{ translateY }] };
            },
        }),
    }
);

export default ModalNavigator;