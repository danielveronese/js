import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';

export default function App() {
  return (
    <View style={{padding:50,marginTop:50,flexDirection:"row",alignItems:"center"}}>
        <TextInput placeholder='srivi todo' style={styles.input} />

        <Button title='invia' onPress={() =>  {}} />
      
          

    
    </View>
  );
}

const styles = StyleSheet.create({
input:{

with:'100%',
borderWidth:1,

}
});
