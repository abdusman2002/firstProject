import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import ViewImageSreen from '../screens/ViewImageSreen'
import ItemsScreen from '../screens/ItemsScreen'
import ImageNavigator from './ImageNavigator'
import ListItemsNavigator from './ListItemsNavigator'
import routes from './routes'



const Tab = createBottomTabNavigator()

const TabNavigator = () => (
  <Tab.Navigator
  screenOptions={{
    "headerShown": false,
    "tabBarActiveTintColor": "white",
    "tabBarInactiveTintColor": "black",
    "tabBarActiveBackgroundColor": "red",
    "tabBarInactiveBackgroundColor": "aqua",
    "tabBarStyle": [
      {
        "display": "flex"
      },
      null
    ]
  }}
  >
    <Tab.Screen 
        name={routes.TAB_BAR_IMAGE_SCREEN}
        component={ImageNavigator} 
        options={{title:'Image',tabBarIcon: ({size,color}) => <MaterialCommunityIcons name='home' size={size} color={color}/>}}
    />
    <Tab.Screen 
        name={routes.TAB_BAR_ITEMS_SCREEN}
        component={ListItemsNavigator} 
        options={{title:'Items', headerStyle: {backgroundColor: 'red'},tabBarIcon: ({size,color}) => <MaterialCommunityIcons name='apps' size= {size} color={color}/>}}
    />
  </Tab.Navigator>
)

export default TabNavigator