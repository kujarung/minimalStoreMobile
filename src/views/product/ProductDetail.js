import React, {Component} from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import axios from 'axios';
import Header from 'components/layout/Header';
import {WebView} from 'react-native-webview';
import {ProductStyle} from 'assets/styles/ProductStyle';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import utils from 'utils';
import { inject } from "mobx-react";

@inject(stores => ({
  ...stores
}))
class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading : false,
      item: {},
      defaultContent: '<div>aaa</div>',
    };
  }

  async componentDidMount() {
    const {  loadingStart, loadingEnd } = this.props.loadingMethod;
    const {id} = this.props.route.params;
    loadingStart()
    const { data } = await axios({
      method: 'get',
      url: `http://minimalstore.gabia.io/api/product/detail/${id}`,
    });
    this.setState({
      item: data[0],
    });
    setTimeout(() => {
      loadingEnd()
    }, 2000);
  }

  _renderItem({item, index}) {
    const showImgPath = utils.path + item.file_path;
    return (
      <View style={{height: 300}}>
        <Image
          style={{height: '100%', width: '100%'}}
          source={{uri: showImgPath}}
          resizeMode="cover"
        />
      </View>
    );
  }

  get pagination () {
    const { item : {ATTACH_IMGs} } = this.state;
    return (
        <Pagination
          dotsLength={1}
          activeDotIndex={0}
          containerStyle={{ backgroundColor: 'red' }}
          dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 8,
              backgroundColor: 'rgba(255, 255, 255, 0.92)',
          }}
          inactiveDotStyle={{
              // Define styles for inactive dots here
          }}
          inactiveDotScale={0.6}
        />
    );
  }
  render() {
    const {item} = this.state;
    const INJECTEDJAVASCRIPT = 'const meta = document.createElement(\'meta\'); meta.setAttribute(\'content\', \'width=device-width, initial-scale=1, maximum-scale=0.99, user-scalable=0\'); meta.setAttribute(\'name\', \'viewport\'); document.getElementsByTagName(\'head\')[0].appendChild(meta); '
    return (
      <View>
        {this.state.isLoading ? <Loading/> : <View></View>}
        <Header navigation={this.props.navigation} isDetail={'true'} />
        <ScrollView style={styles.titleCon}>
          <View style={{marginBottom : 50}}>
            <Carousel
              layout={'default'}
              ref={(ref) => (this.carousel = ref)}
              data={item.ATTACH_IMGs}
              sliderWidth={utils.windowWidth}
              itemWidth={utils.windowWidth}
              renderItem={this._renderItem}
              onSnapToItem={(index) => this.setState({activeIndex: index})}
            />
            { this.pagination }
            <View style={styles.priceItemCon}>
              <Text style={styles.priceTxt}>300,000원</Text>
              <Text style={styles.delTxt}>새상품/무료배송</Text>
            </View>
          </View>
          <View style={{height: 500}}>
            <View style={styles.titleTxtWrap}>
              <View style={styles.titleTxtCon}>
                <Text>라이언 인데요.</Text>
                <View>
                  <View>
                    <Image
                      style={styles.detailImg}
                      source={require('assets/img/show-item.svg')}
                    />
                    <Text>235</Text>
                  </View>
                  <View>
                    <Image
                      style={styles.detailImg}
                      source={require('assets/img/shar-num.svg')}
                    />
                    <Text>18</Text>
                  </View>
                </View>
              </View>
              <View>
                <Text>2020.06.10 오후 10:37</Text>
              </View>
            </View>
            <WebView
              originWhitelist={['*']}
              source={{html: "<style>body { font-size: 150%; word-wrap: break-word; overflow-wrap: break-word; }</style>"+item.product_desc}}
              injectedJavaScript={INJECTEDJAVASCRIPT}
              scrollEnabled
            />
          </View>
          <View />
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  ...ProductStyle,
});
export default ProductDetail;
