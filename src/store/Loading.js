import React from 'react';
import {CommonStyle} from 'assets/styles/CommonStyle';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import { observer, inject } from 'mobx-react';

@inject(stores => ({...stores}))
@observer
class Loading extends React.Component {
  render() {
    const { isLoading } = this.props.loadingMethod;
    return (
      <View>
        {isLoading ? 
          <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator style={styles.indicater} size="large" color="#E39696" />
          </View>
        : <View></View>        
        }
      </View>
    );
  }
}
const styles = StyleSheet.create({
  ...CommonStyle,
});
export default Loading;
