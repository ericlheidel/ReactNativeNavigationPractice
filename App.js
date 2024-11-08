import React, { useEffect, useState } from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import "./gesture-handler"
import { StyleSheet, Text, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import AppOneTabs from "./tabs/AppOneTabs"
import AppTwoTabs from "./tabs/AppTwoTabs"
import Welcome from "./components/Welcome"

const Drawer = createDrawerNavigator()

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Welcome />
      </View>
    )
  } else {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="LED">
          <Drawer.Screen
            name="LED"
            component={AppOneTabs}
            options={{ headerTitle: "MooTV" }}
          />
          <Drawer.Screen
            name="Projector"
            component={AppTwoTabs}
            options={{ headerTitle: "MooTV" }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
})
