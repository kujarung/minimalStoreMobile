import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, FlatList} from 'react-native';
import {ProductStyle} from 'assets/styles/ProductStyle';
import {CommonStyle} from 'assets/styles/CommonStyle';
import ProductItem from './ProductItem';
import axios from 'axios';

class ProductListItem extends Component {
  constructor() {
    super();
    this.state = {
      itemData: [],
      currentPage: 1,
      lastPage: 1,
    };
    this.getDate = this.getDate.bind(this);
  }
  async getDate() {
    console.log("getdata")
    let {currentPage, lastPage} = this.state;
    if (lastPage <= currentPage) {
      const {
        data: {data, count},
      } = await axios({
        method: 'get',
        url: 'http://minimalstore.gabia.io/api/product',
        params: {
          currentPage,
        },
      });
      console.log(data)
      this.setState({
        currentPage: ++currentPage,
        itemData: this.state.itemData.concat(data),
        lastPage: count,
      });
    }
  }
  async componentDidMount() {
    console.log('did mo');
    await this.getDate();
  }
  render() {
    const {itemData} = this.state;
    const {nowTabl} = this.props;
    return (
      <View style={styles.itemCon}>
        <FlatList
          keyExtractor={(item, index) => item.product_code}
          columnWrapperStyle={styles.listCon}
          numColumns={nowTabl === 'All' ? 2 : 1}
          data={itemData}
          onEndReached={async () => {
            console.log('end');
          }}
          onEndReachedThreshold={1}
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ...ProductStyle,
  ...CommonStyle,
});

export default ProductListItem;
