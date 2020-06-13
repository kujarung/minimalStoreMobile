import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Header from 'components/layout/Header';

class About extends React.Component {
  render() {
    return (
      <View>
        <Header navigation={this.props.navigation} />
      </View>
    );
  }
}

export default About;
