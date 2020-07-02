import React from 'react';
import Header from 'components/layout/Header';
import {Text, StyleSheet, View, TextInput, Button } from 'react-native';
import { observer, inject } from 'mobx-react';

@inject(stores => ({...stores}))
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id : "",
      password : ""
    };
  }

  setId(id) {
    this.setState({
      id
    })
  }

  setPassword(password) {
    this.setState({
      password
    })
  }

  login(id, pas) {
    
  }

  render() {
    return(
      <View style={styles.loginWrap}>
        <Header navigation={this.props.navigation} />
        <View style={styles.loginCon}>
          <View>
            <Text style={styles.loginTitle}>
              로그인
            </Text>
          </View>
          <View style={{marginBottom: 20}}>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={text => this.setId(text)}
            />
          </View>
          <View style={{marginBottom: 20}}>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={text => this.setPassword(text)}
              secureTextEntry={true}
            />        
          </View>
          <View>
            <Button
              title="로그인"
              color="#333333"
              accessibilityLabel="Learn more about this purple button"
              onPress={() => this.login(this.state.id, this.state.password)}
            />        
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  loginWrap : {
    flex : 1,
    backgroundColor : 'white',
  },
  loginCon : {
    paddingLeft : 20,
    paddingRight : 20,
  },
  loginTitle : {
    marginTop : 50,
    marginBottom : 50,
    fontSize : 30,
    textAlign : "center"
  }
});