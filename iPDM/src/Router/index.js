import React from "react";
import { Alert } from 'react-native'
import LoginScreen from "../LoginScreen/index.js";
import HomeScreen from "../HomeScreen/index.js";
const Dao = require("../Dao/Repo.js");
const Constant = require("../Dao/Constant.js");

export default class MyRoute extends React.Component {
    async componentWillMount() {
        let seriesID = await Dao.getFromStore('seriesID');
        if (!seriesID) {
            let url = Constant.PDM_API_GET_URL_TEMPLATE.replace('%s', Constant.DEFAULT_HOST).replace('%s', Constant.DEFAULT_PORT);
            let newSeriesID = await Dao.getSeriesID(url);
            Dao.saveToStore('seriesID', newSeriesID);
        }
    }

    render() {
        return <LoginScreen />;
        //return <HomeScreen />
    }
};