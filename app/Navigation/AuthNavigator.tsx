import {createNativeStackNavigator} from '@react-navigation/native-stack'

import WelcomeScreen from '../screens/welcomeScreen'
import AccountsScreen from '../screens/AccountsScreen'
import ItemDetailsScreen from '../screens/ItemDetailsScreen'
import TabNavigator from './TabNavigator'
import routes from './routes'



const Stack = createNativeStackNavigator()


//a parameter sent to the screen can be used as header text .itemName is sent as a parameter to itemDetails screen and that parameter can be used as text header
//header styles can be changed from headerStyle in oprions
//if you want to apply a style to all the screens use screenOptions in Stack.Navigator
//now applying header style to a specific screen will override this options specifide in screenOptions
const AuthNavigator = () => (
  <Stack.Navigator screenOptions={{
      statusBarColor: 'black'
  }} >
    
    <Stack.Screen 
      name={routes.WELCOME_SCREEN} 
      component={WelcomeScreen} 
      options={{title:'Welcome'}}
    />
    <Stack.Screen 
      name={routes.HOME}
      component={TabNavigator} 
      options={{title:'home', headerShown: false}}
    />
    
    
    
  </Stack.Navigator>
)

export default AuthNavigator