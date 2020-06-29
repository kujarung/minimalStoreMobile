import React, {Component} from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {DrawerStyle} from 'assets/styles/DrawerStyle';
import { observer, inject } from 'mobx-react';
import 'mobx-react-lite/batchingForReactNative'

@observer
export default class CustomDrwaer extends Component {
  render() {
    return (
      <DrawerContentScrollView {...this.props}>
        <DrawerItem
          label={({}) => (
            <View style={styles.draweImgCon}>
              <Image
                style={styles.drawerLogo}
                source={require('assets/img/temp-menu.jpg')}
              />
              <View>
                <Text style={styles.nameTxt}>김아무개</Text>
                <Text>
                  <Text style={styles.countCnt}>+ 26</Text>
                  <Text> Days</Text>
                </Text>
              </View>
            </View>
          )}
          onPress={() => this.props.navigation.navigate('Main')}
        />
        <DrawerItemList
          activeBackgroundColor={'#F3EDE6'}
          activeTintColor={'black'}
          {...this.props}
        />
      </DrawerContentScrollView>
    );
  }
}

const styles = StyleSheet.create({
  ...DrawerStyle,
});
