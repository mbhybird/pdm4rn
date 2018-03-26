import React from "react";
import { Image, Dimensions } from 'react-native';
import { SocialIcon } from 'react-native-elements'
import {
    Container, CheckBox, Form, Icon, List, Item, Label, Input, Header, Title, Left, Right, Button, Body, Content, Text, Card, CardItem, ListItem
} from "native-base";
let Screen = Dimensions.get('window');
export default class LoginScreen extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            checked: false,
            isRecording: false
        };
    }
    showQRScanner() {
        this.props.navigation.navigate("Scanner");
    }
    render() {
        return (
            <Container style={{backgroundColor:'white'}}>
                <Header>
                    <Left/>
                    <Body>
                        <Title>LoginScreen</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder>
                    <Card>
                        <CardItem cardBody>
                            <Image source={require('../assets/app_logo.png')}
                                   style={{height: 200, width: Screen.width-20}}
                                   resizeMode={'stretch'}
                            />
                        </CardItem>
                    </Card>
                    <Item floatingLabel>
                        <Label>Username</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel>
                        <Label>Password</Label>
                        <Input />
                    </Item>
                    <ListItem>
                        <CheckBox checked={this.state.checked}
                                  onPress={()=>this.setState({checked:!this.state.checked})}
                        />
                        <Body>
                            <Text>Remember</Text>
                        </Body>
                    </ListItem>
                    <Button full
                            rounded
                            style={{
                                backgroundColor:'#fff',
                                marginTop:10,
                                marginBottom:5
                            }}
                            onPress={this.showQRScanner.bind(this)}>
                        <SocialIcon
                            title='Scan to Sign In...'
                            button
                            light
                            type='instagram'
                        />
                    </Button>
                    <Button full rounded info
                            style={{ marginTop: 5 }}
                            onPress={() => this.props.navigation.navigate("Home")}>
                        <Text>Sign In</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}