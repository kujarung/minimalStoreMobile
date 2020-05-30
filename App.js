// export default App;
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Main from './components/main/Main';
import ProductCon from './components/product/ProductCon';
import CustomDrawerContent from './components/layout/CustomDrwaer';
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Main"
        drawerPosition="right"
        drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Main" component={Main} />
        <Drawer.Screen name="Product" component={ProductCon} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
