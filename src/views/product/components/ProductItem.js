import React from 'react';
import {StyleSheet, View, Text, ImageBackground, Image} from 'react-native';
import {ProductStyle} from 'assets/styles/ProductStyle';
import utils from 'utils';

class ProductItem extends React.Component {
  render() {
    const item = this.props.val;
    const imagePath = item.ATTACH_IMGs[0].file_path;
    const showImgPath = utils.path + imagePath;
    return (
      <View style={styles.item}>
        <View style={styles.itemImgCon}>
          <ImageBackground
            style={styles.itemImg}
            source={{uri: showImgPath}}
            resizeMode="cover">
            <View>
              <Image
                style={styles.starImg}
                source={require('assets/img/active-star.png')}
              />
            </View>
            <View style={styles.itemPrice}>
              <Text style={styles.itemPriceTxt}>{item.product_price} 원</Text>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.itemTxteCon}>
          <View style={styles.itemTitleCon}>
            <Text
              ellipsizeMode="tail"
              numberOfLines={1}
              style={styles.itemTitleTxt}>
              {item.product_name}
            </Text>
          </View>
          <View style={styles.itemDescCon}>
            <Text
              ellipsizeMode="tail"
              numberOfLines={3}
              style={styles.itemDescTxt}>
              {item.product_desc}
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
