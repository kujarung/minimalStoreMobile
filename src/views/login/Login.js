import React, {useState} from 'react';
import Header from 'components/layout/Header';
import {Text, StyleSheet, View, TextInput, Button } from 'react-native';

export default Login = ({navigation}) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  return(
    <View style={styles.loginWrap}>
      <Header navigation={navigation} />
      <View style={styles.loginCon}>
        <View>
          <Text style={styles.loginTitle}>
            로그인
          </Text>
        </View>
        <View style={{marginBottom: 20}}>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => setId(text)}
            value={id}
          />
        </View>
        <View style={{marginBottom: 20}}>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
            value={password}
          />        
        </View>
        <View>
          <Button
            title="로그인"
            color="#333333"
            accessibilityLabel="Learn more about this purple button"
          />        
        </View>
      </View>
    </View>
  )
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