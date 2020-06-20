import { observable, action } from 'mobx';

export default class LoadingStore {
  @observable isLoading = false;

  @action loadingStart = () => {
    console.log("start!!")
    this.isLoading = true;
  };
  
  @action loadingEnd = () => {
    this.isLoading = false;
  };
}
