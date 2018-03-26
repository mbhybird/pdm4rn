import React from 'react';
import { View, Dimensions } from 'react-native';
import { Button, List, ListItem } from 'react-native-elements';
import ShareQRCode from "../ShareScreen/ShareQRCode";
let Screen = Dimensions.get('window');

const list = [
        {
            name: 'Amy Farha',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            subtitle: 'Vice President'
        },
        {
            name: 'Chris Jackson',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'Vice Chairman'
        },
        {
            name: 'Amy Farha',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            subtitle: 'Vice President'
        },
        {
            name: 'Chris Jackson',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'Vice Chairman'
        }
];

export default class ListComp extends React.Component {
    render() {
        return (
            <View>
                <Button
                    raised
                    icon={{name: 'home', size: 32}}
                    buttonStyle={{backgroundColor: 'red', borderRadius: 10}}
                    textStyle={{textAlign: 'center'}}
                    title={`Welcome to\nReact Native Elements`}
                />
                <List containerStyle={{marginBottom: 10, width:Screen.width}}>
                    {
                        list.map((l, i) => (
                            <ListItem
                                roundAvatar
                                avatar={{uri:l.avatar_url}}
                                key={i}
                                title={l.name}
                            />
                        ))
                    }
                </List>
                <ShareQRCode/>
            </View>
        );
    }
}