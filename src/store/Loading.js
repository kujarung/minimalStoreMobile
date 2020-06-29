import React from 'react';
import {CommonStyle} from 'assets/styles/CommonStyle';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import { observer, inject } from 'mobx-react';
import 'mobx-react-lite/batchingForReactNative'

@inject(stores => ({...stores}))
@observer
class Loading extends React.Component {
  render() {
    const { isLoading } = this.props.loadingMethod;
    return (
      <View style={[styles.container, styles.horizontal, isLoading ? styles.indicate : '']}>
        <ActivityIndicator style={styles.indicate} size="large" color="#E39696" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  ...CommonStyle,
});
export default Loading;
