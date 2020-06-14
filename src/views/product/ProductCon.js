import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProductList from './components/ProductList';
import ProductDetail from './ProductDetail';
const Stack = createStackNavigator();

class ProductCon extends React.Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Product"
          component={ProductList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  }
}

export default ProductCon;
