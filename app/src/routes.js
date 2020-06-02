import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from './pages/Home';
import Score from './pages/Score';

const AppDrawer = createDrawerNavigator();



export default function Routes() {
    return (
        <NavigationContainer>
            <AppDrawer.Navigator initialRouteName="Home">
                <AppDrawer.Screen name="Home" component={Home} />
                <AppDrawer.Screen name="Placar" component={Score} />
            </AppDrawer.Navigator>
        </NavigationContainer>
    );
}