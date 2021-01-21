import DataItem from '../../components/dataItem';
import React, { Component } from 'react';
import { Alert, View, SafeAreaView, FlatList, ActivityIndicator,StyleSheet, SafeAreaViewBase } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button} from 'native-base';
import firebase from 'firebase';
import AsyncStorage from '@react-native-community/async-storage';

export default class tabthree extends Component{
    constructor(props){
        super(props);
        this.state = {
            haberler: []
        }
       }
       Listele = async () => {

        const haberlistesi = await AsyncStorage.getItem("HABER");
        this.setState({ haberler: JSON.parse(haberlistesi) });
    }
    Sil= () => {

        AsyncStorage.removeItem("HABER").then(r => {
            this.setState({ haberler: [] });
        }).catch(e => {
            console.warn("error : ", e);
        })

    }
       render(){
        return(
           <View style={{}}>
            <Button style={{marginLeft:60, marginTop:20, backgroundColor:'black'}}title="Listele" onPress={() => this.Listele()} ><Text>Daha Sonra Okunacakları Listele</Text></Button>
            {
                this.state.haberler.map((v, k) => {
                    return (
                        <ListItem thumbnail key={k}>
                <Left>
                <Thumbnail square source={{
                        uri: v.img != null
                            ? v.img : 'https://via.placeholder.com/150'
                    }} />
                </Left>
                
                <Body>
                    <Text numberOfLines={2} >{v.title}</Text>
                    <Text note numberOfLines={3}>{v.description}</Text>
                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 8, marginLeft: 0 }}>
                        <Text note>{v.name}</Text>
                    </View>
                </Body>
              
                <Right>
                  <Button transparent onPress={() => this.Sil()}><Text style={{color:'black', fontSize:16}}>Sil</Text></Button>
                </Right>
            </ListItem>
                    
                    )
                })

            }
         </View>
        )
       }
}
