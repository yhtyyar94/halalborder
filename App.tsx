import WebView from 'react-native-webview';

const App = () => {
  return (
    <WebView source={{uri: 'https://halalborder.com'}} style={{flex: 1}} />
  );
};

export default App;
