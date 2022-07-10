import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import { Header } from './components/layouts/Header/Header';
import { RouteSwitch } from './components/core/RouteSwitch/RouteSwitch';
import { Lines } from 'components/core/Lines/Lines';
import { Social } from 'components/core/Social/Social';

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
