import React from 'react';
import { render } from 'react-dom';
import './style.css';

import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Uvod from './components/Uvod';
import Kvizy from './components/Kvizy';
import Zebricek from './components/Zebricek';
import Header from './components/Header';
import Footer from './components/Footer';
import Otazky from './components/Otazky';
import Vyhodnoceni from './components/Vyhodnoceni';


const App = () => (
  <>
    <BrowserRouter>
      
      <Header />

      <Routes>
        <Route path="*" element={ <Uvod />} />
        <Route path="/kvizy" element={ <Kvizy />} >
          <Route path=":id" element={ <Otazky /> } />
        </Route>
        <Route path="/zebricek" element={ <Zebricek />} />
        <Route path="/otazky" element={ <Otazky />} />
        <Route path="/vyhodnoceni" element={ <Vyhodnoceni />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  </>
);

render(<App />, document.querySelector('#app'));
