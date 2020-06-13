import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {HeaderStyle} from 'assets/styles/HeaderStyle';

class Header extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.header}>
        <View style={styles.headerInner}>
          <Text
            style={styles.logoTxt}
            onPress={() => this.props.navigation.navigate('Main')}>
            MinialStore
          </Text>
          <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
            <Image
              style={styles.menu}
              source={require('assets/img/menu.png')}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  ...HeaderStyle,
});

export default Header;
