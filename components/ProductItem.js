import React from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import {productStyle} from '../assets/styles/productStyle';
import {HeaderStyle} from '../assets/styles/HeaderStyle';

class ProductItem extends React.Component {
  render() {
    return (
      <View style={styles.item}>
        <View style={styles.itemImgCon}>
          <ImageBackground
            style={styles.itemImg}
            source={require('../assets/img/item1.png')}
            resizeMode="cover"
          />
        </View>
        <View style={styles.itemPrice}>
          <Text style={styles.itemPriceTxt}>
            Buy Now - {this.props.val.PRODUCT_PRICE}
          </Text>
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
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ...productStyle,
  ...HeaderStyle,
});

export default ProductItem;
