import React from 'react';
import { StyleSheet, Text, View   } from 'react-native';
import { TextInput,Appbar,Button   } from 'react-native-paper';

import Displaylove from "./components/Displaylove"

class App extends React.Component {

  state ={
    fname:'',
    sname:'',
    result:"Loading"
  }
   


  submitit(){
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.fname}&sname=${this.state.sname}`,{
      headers: {
        'X-rapidapi-host': 'love-calculator.p.rapidapi.com',
        'X-rapidapi-key': '969bbc0166msh3886a2490225363p1d8748jsnf28cc0e0ee66'
      }
    }).then(data=>data.json())
    .then(data2=>{
      console.log(data2);
      this.setState({

        result : data2
      })
    }) 
  }
  
  render(){

      


  return (
    <View style={styles.container}>  
 <Appbar.Header>

        <Appbar.Content  
          title="Love % calculate"
          subtitle="Check you lover percentage  "
          style = {{ alignItems : 'center' }}
        />
   
      </Appbar.Header>

      <TextInput
        label='Person1(male)'
        value={this.state.fname}
        onChangeText={text => this.setState({ fname : text })}
      />
        <TextInput
        label='Person2(Female)'
        value={this.state.sname}  
        onChangeText={text => this.setState({ sname : text })} 
      />
  
<Button style={{ margin : 20 }} icon="face" mode="contained" onPress={this.submitit.bind(this)}>
 Calculate
  </Button>

<Displaylove data = {this.state.result}  />  

    </View>
  );
}
}

export default App;
 
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    //backgroundColor: '#00ff00',
    //backgroundimage: "./assets/flash.png",
  //  alignItems: 'center',
   // justifyContent: 'center',
  },
});
 