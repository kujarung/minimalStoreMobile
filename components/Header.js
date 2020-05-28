import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {mainStyle} from '../assets/styles/mainStyle';

const Header = ({navigation}) => {
  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.headerInner}>
        <Text style={styles.logoTxt}>MinialStore</Text>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            style={styles.menu}
            source={require('../assets/img/menu.png')}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ...mainStyle,
});

export default Header;
