import React, {Component} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Main from './components/Main';
import Product from './components/Product';
import {Image} from 'react-native';
const Drawer = createDrawerNavigator();

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator
          label="MiniMalStore"
          initialRouteName="main"
          drawerPosition="right"
          swipeEnabled="false"
          gestureEnabled="false"
          drawerContentOptions={{
            activeTintColor: '#999999',
            itemStyle: {marginVertical: 10},
            drawerIcon: () => (
              <Image
                source={require('./assets/img/logo.png')}
                resizeMode="contain"
                style={{width: 40, height: 40}}
              />
            ),
          }}>
          <Drawer.Screen name="Main" component={Main} />
          <Drawer.Screen name="Product" component={Product} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
