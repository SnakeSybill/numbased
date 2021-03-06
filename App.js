import React from 'react';
import {StatusBar} from 'react-native';
import Main from './src/pages/main/main.js';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <Main />
    </>
  );
}