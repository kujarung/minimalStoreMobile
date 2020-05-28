/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {mainStyle} from './styles/mainStyle';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

import {} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <View style={styles.container}>
        <SafeAreaView style={styles.header}>
          <View style={styles.headerInner}>
            <Text style={styles.logoTxt}>MinialStore</Text>
            <View>
              <Image
                style={styles.menu}
                source={require('./assets/img/menu.png')}
              />
            </View>
          </View>
        </SafeAreaView>
        <View style={styles.body}>
          <ImageBackground
            style={styles.innerBodyOne}
            source={require('./assets/img/main-back.png')}
            resizeMode="cover">
            <Text style={styles.bodyInnerTxt}>Item</Text>
            <Text style={[styles.bodyInnerTxt, styles.impaTxt]}>Figure</Text>
            <Text style={styles.bodyInnerTxt}>Interior Goods</Text>
            <Text style={styles.bodyInnerTxt}>Books</Text>
          </ImageBackground>

          <View style={styles.innerBodyTwo}>
            <Text style={styles.innerTxtBig}>
              {`하루에 한개,
무엇이든 판매해보세요.`}
            </Text>
            <Text style={styles.innerTxtSmall}>
              첫날에 하나, {'\n'}
              둘째 날에 두개, 셋째날에 세개 {'\n'}
              <Text style={styles.fontBold}>미니멀리즘</Text>을 실천해보세요.
            </Text>
            <View style={styles.bottomImgCon}>
              <Image
                style={styles.bottomImg}
                source={require('./assets/img/Group3.png')}
              />
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  ...mainStyle,
});

export default App;
