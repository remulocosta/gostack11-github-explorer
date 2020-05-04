import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <DndProvider backend={HTML5Backend}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </DndProvider>
);

export default App;
