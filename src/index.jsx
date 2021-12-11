import React from 'react';
import { render } from 'react-dom';
import './style.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainpage from './components/Mainpage';
import WinnerList from './components/WinnerList';
import Header from './components/Header';
import Footer from './components/Footer';
import QuizItem from './components/QuizItem';
import Quizes from './components/Quizes';

const App = () => {

  return (
    <>
      <BrowserRouter>
        
        <Header />

        <Routes>
          <Route path="*" element={ <Mainpage />} />
          <Route path="/kvizy" element={ <Quizes />} />
          <Route path="/kvizy/:id" element={ <QuizItem />} />
          <Route path="/zebricek" element={ <WinnerList />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

render(<App />, document.querySelector('#app'));
