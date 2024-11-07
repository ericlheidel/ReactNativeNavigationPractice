import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import LEDTilesScreen from "../screens/LED/LEDTilesScreen"
import LEDProcessorsScreen from "../screens/LED/LEDProcessorsScreen"
import LEDCalculatorScreen from "../screens/LED/LEDCalculatorScreen"

const Tab = createBottomTabNavigator()

export default function AppOneTabs() {
  return (
    <Tab.Navigator initialRouteName="Calculator">
      <Tab.Screen name="Calculator" component={LEDCalculatorScreen} />
      <Tab.Screen name="Tiles" component={LEDTilesScreen} />
      <Tab.Screen name="Processors" component={LEDProcessorsScreen} />
    </Tab.Navigator>
  )
}
