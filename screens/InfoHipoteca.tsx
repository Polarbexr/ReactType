import React from 'react'
import { StyleSheet, View, Text,Button } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'





export const InfoHipoteca = () =>{
return(
    <View style = {styles.container}>
        <Text style={{fontSize:35, fontWeight:'bold', marginBottom: 10}}>Info Hipoteca</Text>
        <View style = {styles.container_first}>
        <Text style={{fontSize: 20, padding:10,}}>Hipoteca fija BANCO</Text>
        <View>
            <Text style={{padding: 8, fontWeight:'bold', fontSize:18}}>Te prestamos: </Text>
            <Text style={{padding: 8, fontWeight:'bold', fontSize:18}}>Enganche minimo: </Text>
        </View>
        <View style={{
            backgroundColor: '#333',
            height: 3,
            width:'90%',
            marginLeft:'5%',
            flex:0,
            alignItems:'center',
            justifyContent:'center',
            opacity:0.2
            }}>
            </View>
            
            <View>
            <Text style={{padding: 8, fontWeight:'bold', fontSize:18}}>Taza de interes ordinaria: </Text>
            <Text style={{padding: 8, fontWeight:'bold', fontSize:18,marginBottom: 20}}>Anualidad: </Text>
            <Text style={{padding: 8, fontWeight:'normal', fontSize:18}}>Pago mensual: </Text>
            <Text style={{padding: 8, fontWeight:'normal', fontSize:18}}>Ingreso mensial: </Text>
            <Text style={{padding: 8, fontWeight:'bold', fontSize:18}}>CAT 15.1% sin IVA*: </Text>
        </View>
    </View>
        <View style = {styles.container_second}>
    </View>

    <View style={styles.container_button}> 
                <Button
        title="Regresar"
        onPress={() => {
        
        }}
        color="green"
        
      />
                </View>
    </View>
)

}   
const styles = StyleSheet.create({
    container: {
      flex: 1,
     backgroundColor: '#f1f1f1',
     alignItems: 'center',
     justifyContent: 'flex-start',
    },
    container_first: {
      width:'90%',
      height:'50%',
     backgroundColor: '#fff',
     borderRadius: 20
    
    },
    container_second: {
        marginTop:10,
      width:'90%',
      height:'20%',
     backgroundColor: '#fff',
     borderRadius: 20
    
    },
     container_button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 40,
        overflow: 'hidden',
        borderRadius: 10, 
        width: '60%',
    },
     
    
  
   });

export default InfoHipoteca;