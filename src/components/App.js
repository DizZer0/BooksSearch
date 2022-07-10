import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes} from 'react-router-dom'
import Card from './Card'
import CardView from './СardView'
import FormSearch from './FormSearch';
import CardsGrid from './CardsGrid'
import '../index.css';

function App() {
  const startIndex = useSelector( state => state.startIndex)

  const isCardClick = false


  return (
    <div className="page">
      <header className='header'>
        <h1 className='header__title'>Search for books</h1>
        <FormSearch />
        
      </header>
      <main className="content">
        <Routes>
          <Route path='/' element={<CardsGrid />} />
          <Route path='/card-view' element={<CardView />} />
        </Routes>
        
      </main>
    </div>
  );
}

export default App;
