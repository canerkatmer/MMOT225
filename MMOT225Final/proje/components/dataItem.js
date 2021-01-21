import React, { Component } from 'react';
import { ListItem, Left, Right, Thumbnail, Body, Text, Button, View } from 'native-base';
import {Alert, StyleSheet} from 'react-native';
import FB from '../firebase';
import { v4 as uuid } from 'uuid'
import AsyncStorage from '@react-native-community/async-storage';

export default class DataItem extends Component {

    constructor(props) {
        super(props);
        this.data = props.data;
        this.state = {
            veri: []
        }
    }

 
     
    handlePress =() =>{
        const {url,title} = this.data;
        this.props.onPress({url,title});
    }
    
    handleOnAddProductPress=()=>{
        const id = uuid(Int8Array)
        const dataToDB={
            title:this.data.title,
            description:this.data.description,
            url:this.data.url,
            img:this.data.urlToImage,
            name:this.data.source.name
        }
        var haberRef = FB.database().ref('haber')
        var sRef = haberRef.child(id);
      FB.database()
      .ref(sRef)
      .set(dataToDB)
    }
    setNews = async () => {
        const dataToDB={
            url:this.data.url,
            img:this.data.urlToImage,
            title:this.data.title,
            description:this.data.description,
            name:this.data.name
         }
 
         let haberlistesi = this.state.veri;
         haberlistesi.push(dataToDB);
 
 
 
         await AsyncStorage.setItem("HABER", JSON.stringify(haberlistesi));
 
         console.warn("Haber: ", dataToDB);
 
         this.setState({ veri: haberlistesi });
     }
   

    render() {
        return (
            <ListItem thumbnail>
                <Left>
                    <Thumbnail square source={{
                        uri: this.data.urlToImage != null
                            ? this.data.urlToImage : 'https://via.placeholder.com/150'
                    }} />
                </Left>
                <Body>
                    <Text numberOfLines={2}>{this.data.title}</Text>
                    <Text note numberOfLines={3}>{this.data.description}</Text>
                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 8, marginLeft: 0 }}>
                        <Text note>{this.data.source.name}</Text>
                    </View>
                </Body>
                <Right>
                    <Button transparent onPress={this.handlePress}>
                        <Text style={styles.yazi}>Detay</Text>
                    </Button>
                    <Button transparent onPress={this.handleOnAddProductPress}>
                    <Text style={styles.yazi}>Kaydet</Text>
                    </Button>
                    <Button transparent>
                    <Text style={styles.yazi} onPress={this.setNews}>Daha Sonra Oku</Text>
                    </Button>
                </Right>
            </ListItem>
        )
    }
}
const styles = StyleSheet.create({
    yazi:{
        color:'black',
    },
});