import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {productStyle} from '../assets/styles/productStyle';
import {HeaderStyle} from '../assets/styles/HeaderStyle';
import ProductItem from './ProductItem';
import axios from 'axios';

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
    console.log(product.product);
    this.setState({
      itemData: product.product,
    });
  }
  render() {
    const itemList = this.state.itemData;
    console.log(itemList);
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.header}>
          <View style={styles.headerInner}>
            <Text style={styles.logoTxt}>MinialStore</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.openDrawer()}>
              <Image
                style={styles.menu}
                source={require('../assets/img/menu.png')}
              />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        <ScrollView style={styles.productBody}>
          <View>
            <Text style={styles.itemMainTxt}>High Quality</Text>
          </View>
          <View style={styles.itemCon}>
            {itemList.map((val, i) => {
              return <ProductItem val={val} key={i} />;
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ...productStyle,
  ...HeaderStyle,
});

export default Product;
