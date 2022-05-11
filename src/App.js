import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
