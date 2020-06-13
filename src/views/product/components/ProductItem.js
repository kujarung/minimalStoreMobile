import React from 'react';
import {StyleSheet, View, Text, ImageBackground, Image} from 'react-native';
import {ProductStyle} from 'assets/styles/ProductStyle';
import utils from 'utils';

function // 3자리 콤마 (ex. 1000 => 1,000)
numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

class ProductItem extends React.Component {
  render() {
    const item = this.props.val;
    let showImgPath;
    if (item.ATTACH_IMGs) {
      const imagePath = item.ATTACH_IMGs[0].file_path;
      showImgPath = utils.path + imagePath;
    } else {
    }
    return (
      <View style={styles.item}>
        <View style={styles.itemImgCon}>
          <ImageBackground
            style={styles.itemImg}
            source={{uri: showImgPath}}
            imageStyle={{borderRadius: 8}}
            resizeMode="cover">
            <View style={styles.itemBtnCon}>
              {item.del_is_free == 'true' ? (
                <View style={styles.freeBtn}>
                  <Text style={styles.btnTxt}>무료배송</Text>
                </View>
              ) : (
                <Text />
              )}
              <View style={styles.newBtn}>
                <Text>New</Text>
              </View>
            </View>
            <Image
              style={styles.starImg}
              source={require('assets/img/active-star.png')}
            />
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
              {item.product_desc.replace(/(<([^>]+)>)/gi, '')}
            </Text>
          </View>
          <Text style={styles.itemPriceTxt}>
            {numberWithCommas(item.product_price)} 원
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ...ProductStyle,
});

export default ProductItem;
