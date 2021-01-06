import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {View, Text} from 'react-native';
import Home from './screens/Home';
import Header from './components/Header';
const App = () => {
  return (
    <Provider store={store}>
      <Header />

      <Home />
    </Provider>
  );
};
export default App;
