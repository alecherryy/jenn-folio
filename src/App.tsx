import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import { Header } from './components/layouts/Header/Header';
import { RouteSwitch } from './components/core/RouteSwitch/RouteSwitch';
import { Lines } from 'components/core/Lines/Lines';

function App() {
  return (
    <BrowserRouter>
      <Lines />
      <Header />
      <RouteSwitch />
    </BrowserRouter>
  );
}

export default App;
