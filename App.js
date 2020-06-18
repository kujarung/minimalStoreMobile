// export default App;
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Main from 'views/main/Main';
import ProductCon from 'views/product/ProductCon';
import About from 'views/about/About';
import CustomDrawerContent from 'components/layout/CustomDrwaer';
import {StyleSheet, Platform } from 'react-native';
import {CommonStyle} from 'assets/styles/CommonStyle';
import LoadingStore from 'store/LoadingStore';
import Loading from 'store/Loading';
import { Provider, inject } from 'mobx-react'; // MobX 에서 사용하는 Provider
import {notification} from 'utils/firebaseNotification'

const loadingMethod = new LoadingStore();
const Drawer = createDrawerNavigator();

export class App extends React.Component {
  async componentDidMount() {
    if (Platform.OS !== 'ios') {
      //we check if user has granted permission to receive push notifications.
      notification.checkPermission();
      // Register all listener for notification
      notification.createNotificationListeners();
    }
  }
  render() {
    return (
      <Provider loadingMethod={loadingMethod}>
        <Loading />
        <NavigationContainer>
          <Drawer.Navigator
            initialRouteName="Main"
            drawerPosition="right"
            drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="Main" component={Main} />
            <Drawer.Screen name="Product" component={ProductCon} />
            <Drawer.Screen name="About" component={About} />
          </Drawer.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  ...CommonStyle,
});

export default App;
