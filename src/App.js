import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { ProductDetail } from './components/ProductDetail';
import { ProductList } from './components/ProductList';
import { Contact } from './components/Contact';
import { ContactNep } from './components/ContactNep';
import { ContactIn } from './components/ContactIn';
import { PageNotFound } from './components/PageNotFound';

import './App.css';

function App() {
  return (
    <div className="App">
      < Header />
      <main>
          <Routes>
            <Route path='/' element={<Home/>} end></Route>
            <Route path='ProductList' element={< ProductList />}></Route>
            <Route path='ProductDetail' element={< ProductDetail />}></Route>
            <Route path='Contact' element={< Contact />}>
              <Route path='nep' element={< ContactNep />}></Route>
              <Route path='in' element={< ContactIn />}></Route>
            </Route>
            <Route path='/ProductDetail/:id' element={< ProductDetail />}></Route>
            <Route path='*' element={< PageNotFound />}></Route>
          </Routes>
      </main>
      < Footer />
    </div>
  );
}

export default App;
