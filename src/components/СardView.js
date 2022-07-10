import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function CardView () {
  const book = useSelector(state => state.book)
  console.log(book)
  return(
    <section className='card-view'>
      <img className='card-view__img' src={book.img} />
      <div className='card-view__container'>
        <p className="card-view__categorie">{book.categorie}</p>
        <h2 className="card-view__title">{book.title}</h2>
        <p className="card-view__author">{book.author}</p>
        <p className='card-view__description'>{book.description}</p>
      </div>
    </section>
  )
}
export default CardView