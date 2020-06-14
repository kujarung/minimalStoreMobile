import React from 'react';
import {CommonStyle} from 'assets/styles/CommonStyle';
import {StyleSheet, View, ActivityIndicator} from 'react-native';

function Loading(props) {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator style={styles.indicate} size="large" color="#E39696" />
    </View>
  );
}
const styles = StyleSheet.create({
  ...CommonStyle,
});
export default Loading;
