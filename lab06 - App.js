import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
const Tab = createMaterialBottomTabNavigator();

const Stack = createNativeStackNavigator();

class HomeScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Hello </Text>
        <Button
          title="Go to details"
          onPress={() => navigation.navigate("Details")}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  componentDidMount() {
    alert("I am mounted :-D");
  }

  componentWillUnmount() {
    alert("Bye");
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Im details :-D </Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }
}

function Screen1() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

function Screen2() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>I am screen 2 </Text>
    </View>
  );
}

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Screen1} />
          <Tab.Screen name="Settings" component={Screen2} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;

/*import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

// Set Stack and tabs.
const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

class HomeScreen extends React.Component {
  componentDidMount() {
    alert("Home mounted");
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          onPress={() => navigation.navigate("Details")}
          title={"Press me for new screen"}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  componentDidMount() {
    alert(1);
  }

  componentWillUnmount() {
    alert("Bye details");
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }
}

function TabScreen1({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

function TabScreen2({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={TabScreen1} />
        <Tab.Screen name="Settings" component={TabScreen2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
*/
