// export default App;
import React from 'react';
import { Platform } from 'react-native';
import LoadingStore from 'store/LoadingStore';
import Loading from 'store/Loading';
import Login from 'store/Login';
import { Provider, inject } from 'mobx-react'; // MobX 에서 사용하는 Provider
import {notification} from 'utils/firebaseNotification';
import Navigation from 'store/Navigation'
import NavigationStore from 'store/NavigationStore'
import 'mobx-react-lite/batchingForReactNative'

const loadingMethod = new LoadingStore();
const navigationMethod = new NavigationStore();
const loginMethod = new Login();

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
      <Provider loadingMethod={loadingMethod} navigationMethod={navigationMethod} loginMethod={loginMethod}>
        <Loading />
        <Navigation />
      </Provider>
    );
  }
}

export default App;
