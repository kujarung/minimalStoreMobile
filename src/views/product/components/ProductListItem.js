import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {ProductStyle} from 'assets/styles/ProductStyle';
import {CommonStyle} from 'assets/styles/CommonStyle';
import ProductItem from './ProductItem';
import axios from 'axios';
import { inject } from "mobx-react";

@inject(stores => ({
  ...stores
}))
class ProductListItem extends Component {
  constructor() {
    super();
    this.state = {
      itemData: [],
      currentPage: 1,
      lastPage: 1,
    };
    this.getData = this.getData.bind(this);
  }
  async getData() {
    let {currentPage, lastPage} = this.state;
    if (lastPage >= currentPage) {
      const {  loadingStart, loadingEnd } = this.props.loadingMethod;
      loadingStart()
      const {
        data: {data, count},
      } = await axios({
        method: 'get',
        url: 'http://minimalstore.gabia.io/api/product',
        params: {
          currentPage,
        },
      });
      this.setState({
        currentPage: ++currentPage,
        itemData: this.state.itemData.concat(data),
        lastPage: count,
      });
      setTimeout(() => {
        loadingEnd()
      }, 1000);
    }
  }
  componentDidMount() {
    this.getData();
  }

  render() {
    const {itemData} = this.state;
    const {nowTabl} = this.props;
    return (
      <FlatList
        keyExtractor={(item, index) => item.product_code}
        columnWrapperStyle={styles.listCon}
        numColumns={nowTabl === 'All' ? 2 : 1}
        data={itemData}
        onEndReached={async () => {
          await this.getData();
        }}
        onEndReachedThreshold={0.3}
        renderItem={({item}) => (
          <TouchableOpacity
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
    );
  }
}

const styles = StyleSheet.create({
  ...ProductStyle,
  ...CommonStyle,
});

export default React.memo(ProductListItem);
