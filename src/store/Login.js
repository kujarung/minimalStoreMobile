import React from 'react';
import { observable, action } from 'mobx';
import api from 'api'
import AsyncStorage from '@react-native-community/async-storage';

export default class Login extends React.Component {
  @observable isLogin = false;

  @action 
  loginComplete = () => {
    this.isLogin = true;
    AsyncStorage.setItem("isLogin", "true")
  };
  
  @action 
  logout = () => {
    this.isLogin = false;
    AsyncStorage.removeItem("isLogin")
  };
}
