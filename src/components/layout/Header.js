import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {HeaderStyle} from 'assets/styles/HeaderStyle';

class Header extends React.Component {
  render() {
    const {isDetail} = this.props;
    return (
      <SafeAreaView style={styles.header}>
        <View style={styles.headerInner}>
          {isDetail ? (
            <View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Product', {})}>
                <ImageBackground
                  style={styles.backBtn}
                  source={require('assets/img/back-btn.svg')}
                  resizeMode="cover"
                />
                <Text style={styles.detalTxt}>상품상세</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <Text
              style={styles.logoTxt}
              onPress={() => this.props.navigation.navigate('Main')}>
              MinialStore
            </Text>
          )}

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
