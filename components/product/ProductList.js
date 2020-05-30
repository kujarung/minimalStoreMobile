import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {ProductStyle} from '../../assets/styles/ProductStyle';
import ProductItem from './ProductItem';
import axios from 'axios';
import Header from '../layout/Header';

class Product extends Component {
  constructor() {
    super();
    this.state = {
      itemData: [],
    };
  }
  async componentDidMount() {
    const {data: product} = await axios({
      method: 'get',
      url: 'http://localhost:3000/product',
    });
    this.setState({
      itemData: product.product,
    });
  }
  render() {
    const itemList = this.state.itemData;
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} />
        <ScrollView style={styles.productBody}>
          <View>
            <Text style={styles.itemMainTxt}>High Quality</Text>
          </View>
          <View style={styles.itemCon}>
            {itemList.map((val, i) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.push('ProductDetail', {
                      id: val.PRODUCT_CODE,
                    })
                  }>
                  <ProductItem val={val} key={i} />
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ...ProductStyle,
});

export default Product;
