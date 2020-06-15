import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Image,
  StyleSheet,
} from 'react-native';
import Header from 'components/layout/Header';
import {AboutStyle} from 'assets/styles/AboutStyle';

class About extends React.Component {
  render() {
    return (
      <View>
        <Header navigation={this.props.navigation} />
        <ScrollView style={styles.aboutCon}>
          <View>
            <Text style={styles.aboutTxt}>About</Text>
          </View>
          <View style={[styles.imageCon, styles.first]}>
            <View style={styles.leftImg}>
              <Image
                style={[styles.innerImg, styles.firstImg]}
                source={require('assets/img/about1.png')}
                resizeMode="cover"
              />
            </View>
            <View style={styles.rightTxtCon}>
              <Text style={styles.rightTxt}>SIMPLE LIFE</Text>
              <View style={styles.rightLine} />
            </View>
          </View>
          <View>
            <Text style={styles.aboutCenterTxt}>
              사용하지 않는 물건을 등록해보세요 {'\n'}
              필요로 하는 사람들에게, 무료로{'\n'}
              기부 할 수 있습니다
            </Text>
          </View>
          <View style={[styles.imageCon, styles.second]}>
            <View style={styles.rightTxtCon}>
              <Text style={styles.bottomTxt}>FREE DONATE</Text>
            </View>
            <View style={styles.leftImg}>
              <Image
                style={[styles.innerImg, styles.secondImg]}
                source={require('assets/img/about2.jpg')}
                resizeMode="cover"
              />
            </View>
          </View>
          <View style={styles.makeMinimal}>
            <Text style={styles.makeMinimalTxt}>
              첫날에 하나, 둘째 날에 두개, {'\n'}
              미니멀리즘을 실천해보세요. {'\n'}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ...AboutStyle,
});

export default About;
