import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, FlatList} from 'react-native';
import {ProductStyle} from '../../assets/styles/ProductStyle';
import ProductItem from './ProductItem';

class ProductListItem extends Component {
  constructor() {
    super();
    this.state = {
      itemData: [],
    };
  }
  async componentDidMount() {
    // const {data: product} = await axios({
    //   method: 'get',
    //   url: 'http://localhost:3000/api/product',
    // });
    this.setState({
      itemData: [
        {
          PRODUCT_CODE: 1,
          PRODUCT_PRICE: 1000,
          PRODUCT_NAME: 'ryan1',
          PRODUCT_DESC: '팔아요2',
        },
        {
          PRODUCT_CODE: 2,
          PRODUCT_PRICE: 1000,
          PRODUCT_NAME: 'ryan',
          PRODUCT_DESC: '팔아요',
        },
        {
          PRODUCT_CODE: 3,
          PRODUCT_PRICE: 1000,
          PRODUCT_NAME: 'ryan',
          PRODUCT_DESC: '팔지요',
        },
        {
          PRODUCT_CODE: 1,
          PRODUCT_PRICE: 1000,
          PRODUCT_NAME: 'ryan1',
          PRODUCT_DESC: '팔아요2',
        },
        {
          PRODUCT_CODE: 2,
          PRODUCT_PRICE: 1000,
          PRODUCT_NAME: 'ryan',
          PRODUCT_DESC: '팔아요',
        },
        {
          PRODUCT_CODE: 3,
          PRODUCT_PRICE: 1000,
          PRODUCT_NAME: 'ryan',
          PRODUCT_DESC: '팔지요',
        },
        {
          PRODUCT_CODE: 1,
          PRODUCT_PRICE: 1000,
          PRODUCT_NAME: 'ryan1',
          PRODUCT_DESC: '팔아요2',
        },
        {
          PRODUCT_CODE: 2,
          PRODUCT_PRICE: 1000,
          PRODUCT_NAME: 'ryan',
          PRODUCT_DESC: '팔아요',
        },
        {
          PRODUCT_CODE: 3,
          PRODUCT_PRICE: 1000,
          PRODUCT_NAME: 'ryan',
          PRODUCT_DESC: '팔지요',
        },
        {
          PRODUCT_CODE: 1,
          PRODUCT_PRICE: 1000,
          PRODUCT_NAME: 'ryan1',
          PRODUCT_DESC: '팔아요2',
        },
        {
          PRODUCT_CODE: 2,
          PRODUCT_PRICE: 1000,
          PRODUCT_NAME: 'ryan',
          PRODUCT_DESC: '팔아요',
        },
        {
          PRODUCT_CODE: 3,
          PRODUCT_PRICE: 1000,
          PRODUCT_NAME: 'ryan',
          PRODUCT_DESC: '팔지요',
        },
      ],
    });
  }
  render() {
    const itemList = this.state.itemData;
    return (
      <View style={styles.itemCon}>
        <FlatList
          columnWrapperStyle={styles.listCon}
          numColumns={2}
          data={itemList}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{flex: 1}}
              onPress={() =>
                this.props.nav.push('ProductDetail', {
                  id: item.PRODUCT_CODE,
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
