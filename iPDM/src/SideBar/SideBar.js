import React from "react";
import { AppRegistry, Image, StatusBar, ImageBackground} from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";
const routes = ["Home", "My", "Login", "Scanner"];

export default class SideBar extends React.Component {
    render() {
        return (
            <Container>
                <Content>
                    <ImageBackground
                        source={{
                            uri: "https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/img/drawer-cover.png"
                        }}
                        style={{
                            height: 120,
                            alignSelf: "stretch",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                        <Image
                            square
                            style={{ height: 80, width: 70 }}
                            source={{
                                uri: "https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/img/logo.png"
                            }}
                        />
                    </ImageBackground>
                    <List
                        dataArray={routes}
                        renderRow={data => {
                            return (
                                <ListItem
                                    button
                                    onPress={() => this.props.navigation.navigate(data)}>
                                    <Text>{data}</Text>
                                </ListItem>
                            );
                        }}
                    />
                </Content>
            </Container>
        );
    }
}