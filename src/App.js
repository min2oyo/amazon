import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/checkout' element={<h1>장바구니 페이지 입니다</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
