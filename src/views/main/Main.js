import React from 'react';
import {ImageBackground, StyleSheet, View, Text, Image} from 'react-native';
import {MainStyle} from 'assets/styles/MainStyle';
import {HeaderStyle} from 'assets/styles/HeaderStyle';
import Header from 'components/layout/Header';

const Main = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.body}>
        <ImageBackground
          style={styles.innerBodyOne}
          source={require('assets/img/main-back.png')}
          resizeMode="cover">
          <View>
            <Text style={styles.bodyInnerTxt}>Item</Text>
            <Text style={[styles.bodyInnerTxt, styles.impaTxt]}>Figure</Text>
            <Text style={styles.bodyInnerTxt}>Interior Goods</Text>
            <Text style={styles.bodyInnerTxt}>Books</Text>
          </View>
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
              source={require('assets/img/Group3.png')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ...MainStyle,
  ...HeaderStyle,
});

export default Main;
