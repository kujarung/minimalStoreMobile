import React, {Component} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';
import Header from 'components/layout/Header';

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      item: {},
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
    return (
      <View>
        <Header navigation={this.props.navigation} />
        <Text>{item.product_desc}</Text>
      </View>
    );
  }
}

export default ProductDetail;
