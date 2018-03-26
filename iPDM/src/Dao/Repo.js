// async function getMoviesFromApi() {
//     try {
//         // 注意这里的await语句，其所在的函数必须有async关键字声明
//         let response = await fetch('http://facebook.github.io/react-native/movies.json');
//         let responseJson = await response.json();
//         return responseJson.movies;
//     } catch(error) {
//         console.error(error);
//     }
// }

import { AsyncStorage } from 'react-native'

async function getSeriesID(url) {
    try {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "ID": 1001,
                "appid": "1880188",
                "sign": "e501c5cdba4c1b55fef39b664044e26d"
            })
        });

        let responseJson = await response.json();
        return responseJson.Ret[0].SeriesID
    } catch (e) {
        console.log("Oops, error", e);
    }
}

async function setGridItemOrder(sArray){
    try {
        await saveToStore('gridItemOrder', sArray);
    } catch (error) {
        // Error saving data
    }
}

async function getGridItemOrder() {
    try {
        let value = await getFromStore('gridItemOrder');
        if (value !== null) {
            return value;
        }
    } catch (error) {
        // Error retrieving data
    }
}

async function saveToStore(key, value) {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
        console.log('saveToStore', key, JSON.stringify(value));
    } catch (error) {
        // Error saving data
    }
}

async function getFromStore(key) {
    try {
        let value = await AsyncStorage.getItem(key);
        if (value !== null) {
            // We have data!!
            console.log('getFromStore', key, JSON.parse(value));
            return value;
        }
    } catch (error) {
        // Error retrieving data
    }
}

module.exports = {
    getSeriesID : getSeriesID,
    setGridItemOrder: setGridItemOrder,
    getGridItemOrder: getGridItemOrder,
    saveToStore : saveToStore,
    getFromStore : getFromStore
};