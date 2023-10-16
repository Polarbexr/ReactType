import { View, Text  } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import MainStack from "./screens/MainStack";

const App = () => {

  return(
    
<SafeAreaView style = {{flex: 1}}>
  <MainStack/>
</SafeAreaView>

  );
  

};

 
export default App;