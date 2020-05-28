import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {mainStyle} from '../assets/styles/mainStyle';
import {HeaderStyle} from '../assets/styles/HeaderStyle';
import {Header} from './Header';

const Main = ({navigation}) => {
  return (
    <View style={styles.container}>
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
      <View style={styles.body}>
        <ImageBackground
          style={styles.innerBodyOne}
          source={require('../assets/img/main-back.png')}
          resizeMode="cover">
          <Text style={styles.bodyInnerTxt}>Item</Text>
          <Text style={[styles.bodyInnerTxt, styles.impaTxt]}>Figure</Text>
          <Text style={styles.bodyInnerTxt}>Interior Goods</Text>
          <Text style={styles.bodyInnerTxt}>Books</Text>
        </ImageBackground>

        <View style={styles.innerBodyTwo}>
          <Text style={styles.innerTxtBig}>
            하루에 한개,{'\n'}
            무엇이든 판매해보세요.
          </Text>
          <Text style={styles.innerTxtSmall}>
            첫날에 하나, {'\n'}
            둘째 날에 두개, 셋째날에 세개 {'\n'}
            <Text style={styles.fontBold}>미니멀리즘</Text>을 실천해보세요.
          </Text>
          <View style={styles.bottomImgCon}>
            <Image
              style={styles.bottomImg}
              source={require('../assets/img/Group3.png')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ...mainStyle,
  ...HeaderStyle,
});

export default Main;
