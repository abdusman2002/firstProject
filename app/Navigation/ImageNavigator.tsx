import {createNativeStackNavigator} from '@react-navigation/native-stack'


import AccountsScreen from '../screens/AccountsScreen'
import ItemDetailsScreen from '../screens/ItemDetailsScreen'
import ViewImageSreen from '../screens/ViewImageSreen'
import routes from './routes'




const Stack = createNativeStackNavigator()


//a parameter sent to the screen can be used as header text .itemName is sent as a parameter to itemDetails screen and that parameter can be used as text header
//header styles can be changed from headerStyle in oprions
//if you want to apply a style to all the screens use screenOptions in Stack.Navigator
//now applying header style to a specific screen will override this options specifide in screenOptions
const ImageNavigator = () => (
  <Stack.Navigator screenOptions={{
      headerTintColor: 'blue',
      statusBarColor: 'black',
      headerStyle: {
        backgroundColor: 'red'
      }
  }}>
    
    <Stack.Screen 
      name={routes.IMAGE_SCREEN} 
      component={ViewImageSreen} 
      options={{title:'Image'}}
    />
    <Stack.Screen 
      name={routes.ACCOUNT_SCREEN} 
      component={AccountsScreen} 
      options={{title:'Accounts'}}
    />
    
    
  </Stack.Navigator>
)

export default ImageNavigator