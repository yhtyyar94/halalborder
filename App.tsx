import {useEffect} from 'react';
import {Alert, BackHandler} from 'react-native';
import WebView from 'react-native-webview';

const App = () => {
  useEffect(() => {
    const backAction = () => {
      Alert.alert('Nereye!', 'Çıkmak istediğinizden eminmisiniz?', [
        {
          text: 'Iptal',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'Evet', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <WebView source={{uri: 'https://halalborder.com'}} style={{flex: 1}} />
  );
};

export default App;
