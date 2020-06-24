import React from 'react';
import { observable, action } from 'mobx';

export default class UserStore {
  @observable user = {
    userId : "",
    userName : "",
    token : "",
    profileImg : "",
  };

  @action setUserInfo = () => {
    this.isLoading = true;
  };
  
}
