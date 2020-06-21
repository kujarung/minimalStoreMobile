import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Main from 'views/main/Main';
import ProductCon from 'views/product/ProductCon';
import About from 'views/about/About';
import Login from 'views/login/Login';
import CustomDrawerContent from 'components/layout/CustomDrwaer';
import { observer, inject } from 'mobx-react';

const Drawer = createDrawerNavigator();

@observer
export default class Navigation extends React.Component {
  render() {
    return (
      <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Main"
        drawerPosition="right"
        drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Main" component={Main} />
        <Drawer.Screen name="Product" component={ProductCon} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Login" component={Login} />
      </Drawer.Navigator>
    </NavigationContainer>
    )
  }
}