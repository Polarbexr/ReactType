import {View, Text,Button} from 'react-native';
import React from 'react';
import { StyleSheet } from "react-native";


export const IndexScreen = () =>
{
    return(
        <View style={styles.container}>
            <Text style={styles.font_one}> ¡¡Bienvenido!!</Text>
            <Text style={styles.font_one}> Bryan Josue Ortega Casillas</Text>
            <View style={styles.container_second}>
                <Text style={styles.font_two}>Abono semanal para mi casa</Text>
                <Text>Pago 05/10/23 </Text>
                <View style={styles.container_intern} >
                <Text>$6008</Text>
                <Text>$28,678</Text>
                </View>
               
               
                
            </View>
            <View style={styles.container_button}> 
                <Button
        title="Crear nueva"
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
    marginTop: 10,
    flex: 1,
     backgroundColor: '#f1f1f1',
     alignItems: 'center',
     justifyContent: 'flex-start',
    },
    container_second: {
        marginTop: 15,
     backgroundColor: '#fff',
     width: '95%',
     height: '16%',
     borderRadius: 15
     
    
    },
    container_intern: {
     flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
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
    font_one:{
        fontWeight: 'bold',
        fontSize: 20
    },
    font_two:{
        fontWeight:'300',
        fontSize: 20
    }
});
export default IndexScreen