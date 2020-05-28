import React, {Component} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Main from './components/Main';
import Product from './components/Product';

const Drawer = createDrawerNavigator();

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="main" drawerPosition="right">
          <Drawer.Screen name="other" component={Main} />
          <Drawer.Screen name="Main" component={Main} />
          <Drawer.Screen name="Product" component={Product} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
