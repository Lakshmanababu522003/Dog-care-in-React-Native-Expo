
import Welcome from './Screens/Welcome';
import OwnerSignup from './Owner/OwnerSignup';
import OwnerLogin from './Owner/OwnerLogin'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AdminLogin from './Admin/AdminLogin';
import OwnerDashboard from './Owner/OwnerDashboard';
import Home from './Owner/Home';
import Logout from './Screens/Logout';
import DoctorList from './Owner/DoctorList';
import NutritionTips from './Owner/NutritionTips';
import Appointment from './Owner/Appointment';
import Notification from './Owner/Notification';
import AdminDashboard from './Admin/AdminDashboard';
import adminLogout from './Admin/adminLogout'
import AppointmentDetais from './Admin/AppointmentDetais';
// import Dashboard from './PetOwner/Dashboard';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={Welcome} options={{
          headerShown: false
        }}/>
      <Stack.Screen name="OwnerSignup" component={OwnerSignup} options={{
          headerShown: false
        }}/>
        <Stack.Screen name="Ownerlogin" component={OwnerLogin} options={{
          headerShown: false
        }}/>
         <Stack.Screen name="logout" component={Logout} options={{
          headerShown: false
        }}/>
        <Stack.Screen name="alogout" component={adminLogout} options={{
          headerShown: false
        }}/>
        <Stack.Screen name="alogin" component={AdminLogin} options={{
          headerShown: false
        }}/>
         <Stack.Screen name="admindashboard" component={AdminDashboard} options={{
          headerShown: false
        }}/>
        <Stack.Screen name="ownerdashboard" component={OwnerDashboard} options={{
          headerShown: false
        }}/>
         <Stack.Screen name="home" component={Home} options={{
          headerShown: false
        }}/>
         <Stack.Screen name="doctor" component={DoctorList} options={{
          headerShown: false
        }}/>
        <Stack.Screen name="ntips" component={NutritionTips} options={{
          headerShown: false
        }}/>
        <Stack.Screen name="appointment" component={Appointment} options={{
          headerShown: false
        }}/>
        <Stack.Screen name="notification" component={Notification} options={{
          headerShown: false
        }}/>
        <Stack.Screen name="adetails" component={AppointmentDetais} options={{
          headerShown: false
        }}/>
        </Stack.Navigator>
        </NavigationContainer>
  );
}



