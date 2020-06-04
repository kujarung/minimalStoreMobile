import React, {Component} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {ProductStyle} from '../../assets/styles/ProductStyle';
import Header from '../layout/Header';
import {TabView, TabBar} from 'react-native-tab-view';
import ProductListItem from './ProductListItem';

const renderScene = ({route}) => {
  switch (route.key) {
    case 'ALL':
      return <ProductListItem nowTabl={'nowALLTabl'} />;
    case 'BEST':
      return <ProductListItem nowTabl={'nowALLTabl'} />;
    case 'NEW':
      return <ProductListItem nowTabl={'NEW'} />;
  }
};
const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: '#F1B57C', height: 5}}
    labelStyle={{color: 'black', fontWeight: 'bold'}}
    style={{backgroundColor: 'transparnet', marginBottom: 30}}
  />
);
class Product extends Component {
  constructor() {
    super();
    this.state = {
      itemData: [],
      index: 0,
      setIndex: 0,
      routes: [
        {key: 'ALL', title: 'ALL'},
        {key: 'BEST', title: 'BEST'},
        {key: 'NEW', title: 'NEW'},
      ],
    };
  }
  render() {
    const {index, routes} = this.state;
    const _handleIndexChange = (index) => this.setState({index});
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} />
        <ScrollView style={styles.productBody}>
          <TabView
            renderTabBar={renderTabBar}
            navigationState={{index, routes}}
            onIndexChange={_handleIndexChange}
            renderScene={renderScene}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ...ProductStyle,
});

export default Product;
