import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import PJScreen from "../screens/PJ/PJScreen"
import PJLensesScreen from "../screens/PJ/PJLensesScreen"
import PJCalculatorScreen from "../screens/PJ/PJCalculatorScreen"

const Tab = createBottomTabNavigator()

export default function AppTwoTabs() {
  return (
    <Tab.Navigator initialRouteName="Calculator">
      <Tab.Screen name="Calculator" component={PJCalculatorScreen} />
      <Tab.Screen name="PJ's" component={PJScreen} />
      <Tab.Screen name="Lenses" component={PJLensesScreen} />
    </Tab.Navigator>
  )
}
