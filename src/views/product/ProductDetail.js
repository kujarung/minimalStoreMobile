import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import axios from 'axios';
import Header from 'components/layout/Header';
import {WebView} from 'react-native-webview';

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
      url: `http://localhost:8080/api/product/detail/${productCode}`,
    });
    this.setState({
      item: data[0],
    });
  }
  render() {
    const {item} = this.state;
    console.log(item);
    return (
      <View>
        <Header navigation={this.props.navigation} isDetail={'true'} />
        <View style={styles.main}>
          <WebView
            originWhitelist={['*']}
            source={{html: '<h1>Hello world</h1>'}}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({});
export default ProductDetail;
