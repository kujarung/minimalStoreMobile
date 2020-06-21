import { observable, action } from 'mobx';

export default class NavigationStore {
  @observable isLoading = false;

  @action loadingStart = () => {
    this.isLoading = true;
  };
  
  @action loadingEnd = () => {
    this.isLoading = false;
  };
}
