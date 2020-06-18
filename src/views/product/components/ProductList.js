import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {ProductStyle} from 'assets/styles/ProductStyle';
import Header from 'components/layout/Header';
import {TabView, TabBar} from 'react-native-tab-view';
import ProductListItem from './ProductListItem';
import Loading from 'components/Loading';

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
      routes: [
        {key: 'ALL', title: 'ALL'},
        {key: 'BEST', title: 'BEST'},
        {key: 'NEW', title: 'NEW'},
      ],
    };
  }

  render() {
    const {index, routes} = this.state;
    const _handleIndexChange = (index) => {
      this.setState({index});
    };

    const renderScene = ({route}) => {
      switch (route.key) {
        case 'ALL':
          console.log('components start all');
          return (
            <ProductListItem
              navigation={this.props.navigation}
              nowTabl={'All'}
            />
          );
        case 'BEST':
          console.log('components start BEST');
          return (
            <ProductListItem
              navigation={this.props.navigation}
              nowTabl={'Best'}
              loadingStart={this.loadingStart}
              loadingEnd={this.loadingEnd}
            />
          );
        case 'NEW':
          console.log('components start NEW');
          return (
            <ProductListItem
              navigation={this.props.navigation}
              nowTabl={'New'}
              loadingStart={this.loadingStart}
              loadingEnd={this.loadingEnd}
            />
          );
        default:
          return null;
      }
    };
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} />
        <View style={styles.tabContainer}>
          <TabView
            lazy={true}
            renderTabBar={renderTabBar}
            navigationState={{index, routes}}
            onIndexChange={_handleIndexChange}
            renderScene={renderScene}
            renderLazyPlaceholder={Loading}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  ...ProductStyle,
});

export default Product;
