import {View, Text, TextInput, Button} from 'react-native';
import React from 'react';
import { StyleSheet } from "react-native";

const data = [
{id: '1', name : 'Hombre'},
{id: '2', name : 'Mujer'},
{id: '3', name : 'Otro'},
];


export const RegisterScreen = () =>
{
    return(
        <View style={styles.container}>
        <Text style={styles.titulo_first
        } >Registro</Text>
          <TextInput
          placeholder='Nombres:'
          style= {styles.inputs}>
          </TextInput>
          
     
          <TextInput
          placeholder='Apellidos:'
          style= {styles.inputs}>
          </TextInput>
          <TextInput
          placeholder='Nombre de usuario:'
          style= {styles.inputs}>
          </TextInput>
         <TextInput
          placeholder='Correo electronico:'
          style= {styles.inputs}>
          </TextInput>
         
          <TextInput
          placeholder='Contraseña:'
          style= {styles.inputs}
          secureTextEntry={true}>
         
          </TextInput>
          <TextInput
          placeholder='Confirmar contraseña:'
          style= {styles.inputs}
          secureTextEntry={true}
          >
          </TextInput>
          <View style ={styles.buttonContainer}>
      <Button
        title="Registrar usuario"
        onPress={() => {
        }}
        color="blue"
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
      justifyContent: 'space-evenly',
    },
    titulo_first:{
      fontSize: 40,
      fontWeight: 'bold',
      color: '#000',
      textAlign:'center'
    },
    titulo_second:{
      fontSize: 15,
      color: '#000',
      textAlign:'center',
      marginTop: 10
    },
    inputs:{
      padding: 10,
      width: '80%',
      height: 50,
      backgroundColor: '#fff',
      marginTop: 20,
      borderRadius: 30,
    },
    buttonContainer:{
      borderRadius: 10, 
      overflow: "hidden",
      marginTop: 15,
      width: '60%'
    }
    
  
  });
export default RegisterScreen