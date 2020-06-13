import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, FlatList, Text} from 'react-native';
import {ProductStyle} from 'assets/styles/ProductStyle';
import ProductItem from './ProductItem';
import axios from 'axios';

class ProductListItem extends Component {
  constructor() {
    super();
    this.state = {
      itemData: [],
      currentPage: 1,
    };
  }
  async getDate() {
    let {currentPage} = this.state;
    console.log(currentPage);
    const {itemData} = this.state;
    const {
      data: {data},
    } = await axios({
      method: 'get',
      url: 'http://localhost:8080/api/product',
      params: {
        currentPage,
      },
    });
    itemData.push(...data);
    this.setState({
      currentPage: ++currentPage,
      itemData: itemData,
    });
  }
  async componentDidMount() {
    console.log('did mo');
    await this.getDate();
  }
  render() {
    let endReachCall;
    const {itemData} = this.state;
    const {nowTabl} = this.props;
    return (
      <View style={styles.itemCon}>
        <FlatList
          columnWrapperStyle={styles.listCon}
          numColumns={nowTabl === 'All' ? 2 : 1}
          data={itemData}
          onEndReachedThreshold={0}
          onEndReached={() => {
            if (!endReachCall) {
              endReachCall = setTimeout(async () => {
                await this.getDate();
                endReachCall = false;
              }, 1000);
            }
          }}
          renderItem={({item}) => (
            <TouchableOpacity
              key={item.product_code}
              style={{flex: 1}}
              onPress={() =>
                this.props.navigation.push('ProductDetail', {
                  id: item.product_code,
                  navigation: this.props.navigation,
                })
              }>
              <ProductItem val={item} key={item.product_code} />
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
