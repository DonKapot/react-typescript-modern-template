import React, { useState } from 'react';
import './App.css';
import Message from './components/Message/Message';
import { AppContext, AppStateModel } from './storage/contexts';

const App = (): React.ReactElement => {
  const initialAppState: AppStateModel = {
    globalMessage: 'Default App message',
  };

  const [appState, setAppState] = useState<AppStateModel>(initialAppState);

  return (
    <AppContext.Provider value={{ appState, setAppState }}>
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
    </AppContext.Provider>
  );
};

export default App;
