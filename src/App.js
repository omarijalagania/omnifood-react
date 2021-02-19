import React from 'react';
import Header from './components/Header';
import Features from './components/Features';
import Meals from './components/Meals';
import Howitworks from './components/Howitworks';
import Cities from './components/Cities';
import Testimonials from './components/Testimonials';
import Plans from './components/Plans';
import Form from './components/Form';
import Footer from './components/Footer'

import './vendors/css/normalize.css';
import './resources/css/Style.css';
import './resources/css/queries.css';
import './vendors/css/grid.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Features />
      <Meals />
      <Howitworks />
      <Cities />
      <Testimonials />
      <Plans />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
