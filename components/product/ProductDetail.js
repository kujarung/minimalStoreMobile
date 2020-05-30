import React, {Component} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';

class ProductDetail extends Component {
  async componentDidMount() {
    const {data: product} = await axios({
      method: 'get',
      url: 'http://localhost:3000/product',
    });
  }
  render() {
    return (
      <View>
        <Text>{this.props.route.params.id}</Text>
      </View>
    );
  }
}

export default ProductDetail;
