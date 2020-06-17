import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Image, ImageBackground} from 'react-native';
import axios from 'axios';
import Header from 'components/layout/Header';
import {WebView} from 'react-native-webview';
import {ProductStyle} from 'assets/styles/ProductStyle';
import Carousel from 'react-native-snap-carousel';
import utils from 'utils';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
      defaultContent: '<div>aaa</div>',
    };
  }
  async componentDidMount() {
    const {id} = this.props.route.params;
    const productCode = id;
    const {data} = await axios({
      method: 'get',
      url: `http://minimalstore.gabia.io/api/product/detail/${productCode}`,
    });
    this.setState({
      item: data[0],
      carouselItems: [
        {
            title:"Item 1",
            text: "Text 1",
        },
        {
            title:"Item 2",
            text: "Text 2",
        },
        {
            title:"Item 3",
            text: "Text 3",
        },
        {
            title:"Item 4",
            text: "Text 4",
        },
        {
            title:"Item 5",
            text: "Text 5",
        },
      ]      
    });
  }

  _renderItem({item,index}){
    const showImgPath = utils.path + item.file_path
    console.log("~!@#!@#!@$!@%!#%!#%$@%@$#@")
    console.log(showImgPath)
    return (
      <View style={{height: 300}}>
        <Image
          style={{height:'100%',width:'100%'}}
          source={{uri:showImgPath}}
          resizeMode="cover"
        />   
      </View>
    )
}

  render() {
    const {item} = this.state;
    return (
      <View>
        <Header navigation={this.props.navigation} isDetail={'true'} />
        <ScrollView style={styles.titleCon}>
          <View>
            <Carousel
              layout={"default"}
              ref={ref => this.carousel = ref}
              data={item.ATTACH_IMGs}
              sliderWidth={300}
              itemWidth={300}
              renderItem={this._renderItem}
              onSnapToItem = { index => this.setState({activeIndex:index}) } />          
            <View>
              <Text>
                300,000원
              </Text>
              <Text>
                새상품/무료배송
              </Text>
            </View>
          </View>
          <View style={{height: 500}}>
            <View>
              <View>
                <Text>
                  라이언 인데요.
                </Text>
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
                <Text>
                  2020.06.10 오후 10:37
                </Text>
              </View>
            </View>
            <WebView originWhitelist={['*']} source={{html: item.product_desc}} />
          </View>
          <View>

          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  ...ProductStyle
});
export default ProductDetail;
