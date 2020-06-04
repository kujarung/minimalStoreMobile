import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

export default class CustomDrwaer extends Component {
  render() {
    return (
      <DrawerContentScrollView {...this.props}>
        <DrawerItem
          label={({}) => (
            <Image
              style={styles.drawerLogo}
              source={require('../../assets/img/temp-menu.jpg')}
            />
          )}
          onPress={() => this.props.navigation.navigate('Main')}
        />
        <DrawerItemList {...this.props} />
      </DrawerContentScrollView>
    );
  }
}

const styles = StyleSheet.create({
  drawerLogo: {
    width: 80,
    height: 80,
  },
});
