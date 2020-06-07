import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from './pages/Home';
import Score from './pages/Score';
import Settings from './pages/Settings'
import About from './pages/About';
import Sidebar from './components/SideBar';

const AppDrawer = createDrawerNavigator();



export default function Routes() {
    return (
        <NavigationContainer>
            <AppDrawer.Navigator 
                initialRouteName="Home"
                drawerStyle={{paddingTop: 0}}
                drawerContent = {props => <Sidebar {...props}/>}
                drawerContentOptions={{
                    labelStyle:{fontFamily:'Quicksand-Bold'},
                    activeTintColor: '#e91e63',
                    inactiveTintColor : '#41414D',
                    itemStyle:{marginHorizontal: 0, marginVertical: 0}                    
                  }}
            >
                <AppDrawer.Screen name="Home" component={Home}/>
                <AppDrawer.Screen name="Placar" component={Score} />
                <AppDrawer.Screen name="Configurações" component={Settings} />
                <AppDrawer.Screen name="Sobre" component={About} />
            </AppDrawer.Navigator>
        </NavigationContainer>
    );
}