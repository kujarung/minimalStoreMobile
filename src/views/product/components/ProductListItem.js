import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, FlatList} from 'react-native';
import {ProductStyle} from 'assets/styles/ProductStyle';
import ProductItem from './ProductItem';
import axios from 'axios';

class ProductListItem extends Component {
  constructor() {
    super();
    this.state = {
      itemData: [],
    };
  }
  async componentDidMount() {
    const {
      data: {data},
    } = await axios({
      method: 'get',
      url: 'http://localhost:8080/api/product',
    });
    this.setState({
      itemData: data,
    });
  }
  render() {
    const {itemData} = this.state;
    return (
      <View style={styles.itemCon}>
        <FlatList
          columnWrapperStyle={styles.listCon}
          numColumns={2}
          data={itemData}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{flex: 1}}
              onPress={() =>
                this.props.navigation.push('ProductDetail', {
                  id: item.product_code,
                  navigation: this.props.navigation,
                })
              }>
              <ProductItem val={item} />
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ...ProductStyle,
});

export default ProductListItem;
