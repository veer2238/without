import React from 'react';
import { StyleSheet, View, Text, ScrollView,Image, FlatList,TextInput } from 'react-native';
var data =require('./Card.json')





export default function App() {


   
    return (
      <View>

      <Text style={{fontSize:30,marginTop:20}}>Flat list with api</Text>
      <TextInput
     
       
        placeholder="search here..."
   
      />

      {
        data.length?
        <FlatList
        data={data}
        renderItem={({item})=><View style={{borderBottomColor:"orange",borderBottomWidth:1,padding:10}}>

        <Text style={{fontSize:18,backgroundColor:"grey"}}>{item.title}</Text>
     
        </View>}
        />:null


      }
      
    
    
      

      </View>
    
      
    )
  
}



