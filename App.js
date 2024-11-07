import { createDrawerNavigator } from "@react-navigation/drawer"
import "./gesture-handler"
import { StyleSheet } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import AppOneTabs from "./tabs/AppOneTabs"
import AppTwoTabs from "./tabs/AppTwoTabs"

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="LED">
        <Drawer.Screen name="LED" component={AppOneTabs} />
        <Drawer.Screen name="Projector" component={AppTwoTabs} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
