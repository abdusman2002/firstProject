import {createNativeStackNavigator} from '@react-navigation/native-stack'

import WelcomeScreen from '../screens/welcomeScreen'
import AccountsScreen from '../screens/AccountsScreen'
import ItemDetailsScreen from '../screens/ItemDetailsScreen'
import TabNavigator from './TabNavigator'
import ItemsScreen from '../screens/ItemsScreen'



const Stack = createNativeStackNavigator()


//a parameter sent to the screen can be used as header text .itemName is sent as a parameter to itemDetails screen and that parameter can be used as text header
//header styles can be changed from headerStyle in oprions
//if you want to apply a style to all the screens use screenOptions in Stack.Navigator
//now applying header style to a specific screen will override this options specifide in screenOptions
const ListItemsNavigator = () => (
  <Stack.Navigator screenOptions={{
        statusBarColor: 'black'
  }}>
    
    <Stack.Screen 
        name='itemsHomeScreen' 
        component={ItemsScreen} 
        options={{title:'Items'}}
    />
    
    
    <Stack.Screen 
        name='itemsDetailScreen' 
        component={ItemDetailsScreen} 
        options={ ({route}) => ({title:route.params.itemName})}
    /> 
  </Stack.Navigator>
)

export default ListItemsNavigator