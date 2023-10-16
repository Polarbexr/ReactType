import React from 'react';
import { Text, View, Button, Alert,  TextInput} from 'react-native';
import { Image } from 'react-native-elements';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet } from "react-native";
import { Linking, Platform } from 'react-native';
import { Link } from '@react-navigation/native';

type RootStackParamList = {
  HomeScreen: undefined;
  Register: undefined;
  Inicio: undefined;
  Hipoteca: undefined;
};
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HomeScreen'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const handlePress = () => {
  Alert.alert("Botón presionado", "Este es un botón de ejemplo");
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    
    <View style= {styles.container}>
      {/* <Image source={require("./assets/WHSC-600x600.png")} style={{ width: 150, height: 150 }} /> */}

      <Text  style= {styles. titulo_first}>Calculadora de hipotecas</Text> 
      <TextInput
      placeholder='Tu correo aqui'
      style= {styles.inputs}>
      </TextInput>
      <TextInput
      placeholder='Contraseña'
      style= {styles.inputs}>
      </TextInput>
      <Text style= {styles. titulo_second} >¿Olvidaste tu contraseña?</Text> 
      <View style ={styles.buttonContainer}>
      <Button
        title="Iniciar sesion"
        onPress={() => {
          navigation.navigate('Inicio');
        }}
        color="blue"
      />
      </View>
      <View style ={styles.buttonContainer}>
      <Button
        title="¿No tienes una cuenta?"
        onPress={() => {
          navigation.navigate('Register');
        }}
        color="blue"
      />
      </View>
      <View style ={styles.buttonContainer}>
      <Button
        title="Boton de prueba"
        onPress={() => {
          navigation.navigate('Hipoteca');
        }}
        color="blue"
      />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor: '#f1f1f1',
   alignItems: 'center',
   justifyContent: 'center',
  },
  titulo_first:{
   fontSize: 40,
   fontWeight: 'bold',
   color: '#000',
  textAlign:'center'
  },
  titulo_second:{
    fontSize: 15,
     color: 'blue',
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
     marginTop: 10,
     width: '60%',
    
   }
  

 });

export default HomeScreen;

