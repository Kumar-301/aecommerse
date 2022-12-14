import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MainContent from './components/MainContent';
import Login from './components/Login';
import Signin from './components/Signin';
import Main from './components/Main';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Orders from './components/Orders';
function App() {
  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route path='/' element={<MainContent/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signin/>}/>
          <Route path='/main' element={<Main/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/orderplaced' element={<Orders/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
