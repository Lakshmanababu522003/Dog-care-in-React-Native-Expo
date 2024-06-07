import { View,StyleSheet } from 'react-native'
import React from 'react'
import { DrawerContentScrollView,
DrawerItem,
} from '@react-navigation/drawer';
import {
    Avatar,
    Title,
    Caption,Paragraph,Drawer,Text,TouchableRipple,Switch,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';





export default function CustomDrawer(props) {
  return (
    <View style={{flex:1}}>
        <DrawerContentScrollView {...props}>
            <View style={styles.drawerContent} >
                <View style={styles.UserInfoSection}>
                    <View style={{flexDirection:'row',marginTop:15,backgroundColor:'#f2f2f2'}}>
                        <Avatar.Image 
                        source={require('../assets/bg.png')}
                        size={60}

                        />
                        <View style={{marginLeft:15,flexDirection:'column'}} >
                            <Title style={styles.title}>Lakshmanababu</Title>
                            <Caption style={styles.Caption}>lachu@2003.in</Caption>
                        </View>
                    </View>
                </View>
                <Drawer.Section style={styles.drawerSection}>
                <DrawerItem 
            icon={({color,size}) => (
                <Icon
                name='view-dashboard-variant'
                color={color}
                size={size}
                />
            )}
            label="Dashboard"
            onPress={()=>{props.navigation.navigate('home')}}
            />

<DrawerItem 
            icon={({color,size}) => (
                <Icon
                name='account-supervisor'
                color={color}
                size={size}
                />
            )}
            label="Doctor"s
            onPress={()=>{props.navigation.navigate('doctor')}}
            
            />

<DrawerItem 
            icon={({color,size}) => (
                <Icon
                name='application-edit'
                color={color}
                size={size}
                />
            )}
            label="Nutrition"
            onPress={()=>{props.navigation.navigate('ntips')}}
            
            />

<DrawerItem 
            icon={({color,size}) => (
                <Icon
                name='bell-ring'
                color={color}
                size={size}
                />
            )}
            label="Nodification"
            onPress={()=>{props.navigation.navigate('notification')}}
            
            />
                </Drawer.Section>
            </View>
        </DrawerContentScrollView>
        <Drawer.Section style={styles.bottonDrawerSection}>
            <DrawerItem 
            icon={({color,size}) => (
                <Icon
                name='exit-to-app'
                color={color}
                size={size}
                />
            )}
            label="Logout"
            onPress={()=>{props.navigation.navigate('logout')}}
            
            />

        </Drawer.Section>
      
    </View>
  )
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  UserInfoSection:{
    paddingLeft:3,
  },
  title:{
    fontSize:18,
    marginTop:3,
    fontWeight:'bold'
  },
  captiob:{
    fontSize:14,
    lineHeight:14
  },
  section:{
    flexDirection:"row",
    alignItems:'center',
    marginLeft:15,
  },
  paragraph:{
    fontWeight:'bold',
    marginRight:3
  },
  drawerSection:{
    marginTop:15
  },
  bottonDrawerSection:{
    marginBottom:15,
    borderTopColor:'#f4f4f4',
    borderTopWidth:1
  },
  
});