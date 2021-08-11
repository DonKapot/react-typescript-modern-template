import React from 'react';

export interface AppStateModel {
  globalMessage: string;
}

interface AppContext {
  appState: AppStateModel;
  setAppState: any;
}

export const AppContext = React.createContext({} as AppContext);
