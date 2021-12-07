import React, { useEffect, useState } from 'react';
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

const App = () => {
  //předání call back fce do komponenty Otazky pro získání čísla kvízu - NEFUNGUJE
  const[quiznb, setQuiznb] = useState(1)
  const handleQuiznb = (quiznb) => {
    setQuiznb(quiznb)
  }
  // console.log(quiznb)

  useEffect(() => {}, [quiznb])

  return (
    <>
      <BrowserRouter>
        
        <Header />

        <Routes>
          <Route path="*" element={ <Uvod />} />
          <Route path="/kvizy" element={ <Kvizy quiznb={quiznb}/>} >
            <Route path=":id" element={ <Otazky handleQuiznb={handleQuiznb}/> } />
            <Route path=":ev" element={ <Vyhodnoceni /> } />
          </Route>
          <Route path="/zebricek" element={ <Zebricek />} />
          <Route path="/otazky" element={ <Otazky />} />
          <Route path="/vyhodnoceni" element={ <Vyhodnoceni />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

render(<App />, document.querySelector('#app'));
