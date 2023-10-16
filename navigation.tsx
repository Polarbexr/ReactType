import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
     
     
    </Tab.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

export default Navigation;
