import React from 'react';
import { StyleSheet, Text, View   } from 'react-native';

const Displaylove  = (prop) =>{

    if(prop.data == 'Loading'){
        return <Text style={styles.text} > Loading .......</Text>
    }if(prop.data.massage){
        return <Text style={styles.text} >Opps !! Something Went Wrong.</Text>
    }
    
    else{

        return (
            <View style={styles.container}>
        <Text style={styles.text}> {prop.data.percentage}  %</Text>
         <Text style={styles.text}> {prop.data.result}</Text>
                </View>
         )

    }  


}

export default Displaylove

const styles = StyleSheet.create({
    container:{
        flex : 1,
        backgroundColor:'#FFF',
        textAlign:'center'
    },
    text:{
        fontSize:30,
        textAlign:'center'
    }
})