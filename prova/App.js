import * as React from 'react';
import { Text, View, StyleSheet,TextInput,Button } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  state = {
     
    value:'',
    todolist: [],

  }
    onChangeTextHandler=(text)=> {
     this.setState({value: text})

    }
    addtodohandler=() =>{

       this.setState(prevState =>{
         return{

         todolist: prevState.todolist.concat(prevState.value)
         }
       })

    }
    render(){
      const list = this.state.todolist.map(todo=>{
      return<Text>{todo}</Text>
         
      })
  return (
    <View >
      <View style={{padding:50,marginTop:50,flexDirection:'row',alignItems:'center',}}>
           <TextInput value={this.state.value} onChangeText={this.onChangeTextHandler} placeholder='crivi todo' style={styles.input} />
           <Button title='invia' style={styles1.button} onPress={this.addtodohandler}   />
      </View>
      <View>
        {list}
      </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  input: {
 width:'80%',
 borderWidth:1,
 borderRadius:5,
  },


});
const styles1 = StyleSheet.create({
    button:{
  borderRadius:20,
    },
  });

