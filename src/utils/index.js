import {
  Dimensions,
} from 'react-native';

const utils = {
  path: 'http://minimalstore.gabia.io',
  defualImgPath: 'http://minimalstore.shop/img/about1.18713c74.png',
  numberWithCommas: (x) => { return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') } ,
  windowWidth :  Dimensions.get('window').width,
};

export default utils;
