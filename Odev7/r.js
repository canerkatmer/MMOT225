import React from 'react';
import {View,Text, ScrollView,TouchableOpacity} from 'react-native';

export default class Restoran_Getir extends React.Component{
  constructor(props){
    super(props)
    this.state={
      R_Getir:null,
      yorum:[]
    }
  }
  componentDidMount(){
    fetch('https://developers.zomato.com/api/v2.1/search?entity_type=city&q=ist&sort=rating&order=desc',{
      method:'GET',
      headers:{
        'user-key':'11f9a42a7e5ccf21b0001e7cffb406bd'
      }
    })
    .then(r=>{
      return r.json();
    })
    .then(res=>{
      this.setState({R_Getir:res.restaurants});
    })
    .catch(e=>{
      console.warn('error: ', e);
    });
  }
  click(id){
    var str = 'https://developers.zomato.com/api/v2.1/reviews?res_id=16694272'; 
    fetch(str,{
      method:'GET',
      headers:{
        'user-key':'11f9a42a7e5ccf21b0001e7cffb406bd'
      }
    })
    .then(r=>{
      return r.json();
    })
    .then(res=>{
      this.setState({yorum:res.user_reviews});
    })
    .catch(e=>{
      console.warn('error: ', e);
    });
  }
  render(){
    if (!this.state.R_Getir){
      return (<View><Text>.....</Text></View>);
    }
    return(
      <View>
        <Text>İlgili Restoran'ın Müşteri Yorumları</Text>
          <ScrollView style={{backgroundColor:'skyblue',padding:20}} >
            {this.state.yorum.map(v=>{
              return(<Text key={v.review.id}>{v.review.review_text}</Text>)
            })}
          </ScrollView>
        <ScrollView style={{backgroundColor:'magenta'}} >
        {
          this.state.R_Getir.map(v=>{
            return(<TouchableOpacity onPress={()=>this.click(v.restaurant.id)}>
              <Text key={v.restaurant.id}>{v.restaurant.name}</Text>
              </TouchableOpacity>)
          })
        }
        </ScrollView> 
        </View>
)
  }
}