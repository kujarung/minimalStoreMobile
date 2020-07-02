import React from 'react';
import { observable, action } from 'mobx';
import api from 'api'
import AsyncStorage from '@react-native-community/async-storage';

export default class Login extends React.Component {
  @observable isLogin = false;
  @observable userInfo = {
    
  }

  @action checkIdAndPass = async (id, password) => {
    this.isLogin = true;
  };
  
  @action loadingEnd = () => {
    this.isLoading = false;
  };
}
