import React from 'react';
import './App.css';
import Message from './components/Message/Message';

const App = (): React.ReactElement => (
  <main className="App">
    <p>Hello App</p>
    <Message />
    <Message message="Some message" />
    <Message message="Message with children">
      {{
        head: <h2>Message Head</h2>,
        body: <div>Message Body</div>,
      }}
    </Message>
  </main>
);

export default App;
