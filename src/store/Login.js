import React from 'react';
import { observable, action } from 'mobx';
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';

export default class Login extends React.Component {
  @observable isLogin = false;
  @observable userInfo = {

  }

  @action checkIdAndPass = (id, password) => {
      const { data } = axios.post({
        method : 'http://minimalstore.shop/api/login',
        data: { id, password},        
        headers: { 'Content-Type': 'multipart/form-data'},
      })
      console.log(data)
  };
  
  @action loadingEnd = () => {
    this.isLoading = false;
  };
}
