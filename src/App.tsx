import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { Header } from 'components/layouts';
import { Lines, RouteSwitch, Social } from 'components/core';

function App() {
  return (
    <BrowserRouter>
      <Lines />
      <Header />
      <RouteSwitch />
      <Social />
    </BrowserRouter>
  );
}

export default App;
