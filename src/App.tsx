import React from 'react';
import './App.css';
import Message from './components/Message/Message';

const App = (): React.ReactElement => (
  <div className="App">
    HELLO
    <Message message="Some message" />
    <Message />
  </div>
);

export default App;
