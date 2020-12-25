import React from 'react';
import {FlatList, Text, View, ScrollView,TouchableOpacity} from 'react-native';
export default class L extends React.Component{
    constructor(props){
        super(props);
        this.state={
        x:[],
        }
    }
    componentDidMount = async ()=>{
        let a =  await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(r=>r.json());
        
            this.setState({x:a})
    };
    handlePress = id =>{
        this.setState({y:id})
    }
    lst(){
        let render=[];
        this.state.x.map((v,k)=>{

            if(v.id===this.state.y){
               render.push(
               <Text style={{minHeight:75, fontSize:16, paddingLeft:5, marginTop:21}}>
              <Text style={{ fontSize:16,color:'skyblue'}}>id:</Text> {v.id}
               <Text style={{ fontSize:16, color:'skyblue'}}>{"\n"}title:</Text>{v.title}
               <Text style={{ fontSize:16,color:'skyblue'}}>{"\n"}body:</Text>{v.body}</Text>
               )
            }
        }
        )
        return render
    }
    render(){
        return(
        <View style={{flex:1}}>
            <FlatList style = {{marginTop:10,flex:1,minHeight:257,backgroundColor: 'skyblue'}}
                let data = {this.state.x}
                renderItem={({item})=>{
                    return(
                       <TouchableOpacity onPress={()=>this.handlePress(item.id)} style={{textAlign:'center', minHeight: 20, backgroundColor: 'white'}}>
                           <Text style={{textAlign:'center',color:'skyblue', backgroundColor:'black',fontSize:18}}>{item.title}</Text>
                       </TouchableOpacity> 
                    )
                }
                }
                />
             <ScrollView style={{flex:1,minHeight:400}}>
                {this.lst()}
                </ScrollView>
            <Text style={{color: 'white', fontSize:17, textAlign:'center', backgroundColor:'black', padding:7}}></Text>
        </View>
        )
    }
}
