import React from 'react';
import {StyleSheet, View, Text, ImageBackground, Image} from 'react-native';
import {ProductStyle} from '../../assets/styles/ProductStyle';

class ProductItem extends React.Component {
  render() {
    return (
      <View style={styles.item}>
        <View style={styles.itemImgCon}>
          <ImageBackground
            style={styles.itemImg}
            source={require('../../assets/img/item1.png')}
            resizeMode="cover">
            <View>
              <Image
                style={styles.starImg}
                source={require('../../assets/img/active-star.png')}
              />
            </View>
            <View style={styles.itemPrice}>
              <Text style={styles.itemPriceTxt}>
                {this.props.val.PRODUCT_PRICE} 원
              </Text>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.itemTxteCon}>
          <View style={styles.itemTitleCon}>
            <Text style={styles.itemTitleTxt}>
              {this.props.val.PRODUCT_NAME}
            </Text>
          </View>
          <View style={styles.itemDescCon}>
            <Text style={styles.itemDescTxt}>
              {this.props.val.PRODUCT_DESC}
            </Text>
          </View>
          <View style={styles.itemBtnCon}>
            <View style={styles.bestBtn}>
              <Text style={styles.btnTxt}>Best</Text>
            </View>
            <View style={styles.freeBtn}>
              <Text style={styles.btnTxt}>무료배송</Text>
            </View>
            <View style={styles.newBtn}>
              <Text>New</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ...ProductStyle,
});

export default ProductItem;
