import React, {useContext, useState,Component} from 'react';
import {  Container, Header, Content, Left, Body, Right, Title, Tab, Tabs, Button, Text,handlePress} from 'native-base';
import Tab1 from './fragments/fragmentbir';
import Tab2 from './fragments/fragmentiki';
import Tab3 from './fragments/fragmentuc';
import {StyleSheet} from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';
import FormButton from '../components/FormButton';
const HomeScreen = ({navigation}) => {
    const {logout} = useContext(AuthContext);


        return (
            <Container>
                <Header style={{ backgroundColor: 'black'}} hasTabs >
                    <Left />
                        <Button style={styles.buton3} buttonTitle='Logout' onPress={() => logout()}><Text style={styles.yazi}>Çıkış</Text></Button>
                    <Right />
                </Header>
                <Tabs>
                    <Tab tabStyle={{ backgroundColor: '#black' }}
                        activeTabStyle={{ backgroundColor: 'black' }}
                        heading="Haberler">
                        <Tab1 />
                    </Tab>
                    <Tab tabStyle={{ backgroundColor: '#black' }}
                        activeTabStyle={{ backgroundColor: 'black' }}
                        heading="Kaydedilenler">
                        <Tab2 />
                    </Tab>
                <Tab tabStyle={{ backgroundColor: '#black' }}
                        activeTabStyle={{ backgroundColor: 'black' }}
                        heading="Daha Sonra Oku">
                        <Tab3 />
                    </Tab>
                </Tabs>
            </Container>
        );
    


}
export default HomeScreen;
const styles = StyleSheet.create({

buton3:{
    flex:1,
    backgroundColor:'white',
    position:'absolute',
    right:10,
    top:15,
    height:30,
},
yazi:{
    fontSize:12,
    color: 'black'
}
});