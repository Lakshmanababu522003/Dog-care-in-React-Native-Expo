import React from 'react';
import { Image, View, Text } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import Home from './Home';
import DoctorList from './DoctorList';

const Drawer = createDrawerNavigator();



const OwnerDashboard = () => {
  return (
    <Drawer.Navigator  drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Dashboard" component={Home} />
      <Drawer.Screen name="Doctors" component={DoctorList} />

      {/* <Drawer.Screen name="home" component={Home} /> */}

    </Drawer.Navigator>
  );
};

export default OwnerDashboard;
