// import React from 'react';
// import { StyleSheet, Text, View, Alert } from 'react-native';
//
// import List from './src/Testing/ListComp';
//
// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text onPress={() => Alert.alert("Hello RN!")} style={{margin:15}}>Hello RN!</Text>
//         <List/>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'flex-start'
//   },
// });

import React, { Component } from "react";
//import Expo from "expo";
import HomeScreen from "./src/HomeScreen/index.js";
import MyRoute from "./src/Router/index.js";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            isReady: false
        };
    }
    async componentWillMount() {
        // await Expo.Font.loadAsync({
        //     Roboto: require("native-base/Fonts/Roboto.ttf"),
        //     Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        //     Ionicons: require("native-base/Fonts/Ionicons.ttf")
        // });
        this.setState({ isReady: false });
    }
    render() {
        if (!this.state.isReady) {
            //return <Expo.AppLoading />;
            return <MyRoute/>
        }
        return <HomeScreen />;
    }
}
