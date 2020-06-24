import {Dimensions} from 'react-native'

const CommonStyle = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex : 500,
    bottom: 0
  },
  loading : {
    zIndex : 9999,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    zIndex: 500,
  },
  indicater: {
    height: 80
  },
};

export {CommonStyle};
