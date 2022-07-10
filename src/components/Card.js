import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'

function Card(props) {
  const dispatch = useDispatch()
  const id = props.id

  function handleCardClick() {
    dispatch({type: 'select_book', changeBook: {title: props.title, img: props.img, categorie: props.categorie, author: props.author, description: props.description}})
  }

  return(
    <Link to='/card-view'>
      <article onClick={handleCardClick} className="card">
        <img className="card__image" src={props.img}/>
        <p className="card__categorie">{props.categorie}</p>
        <h2 className="card__title">{props.title}</h2>
        <p className="card__author">{props.author}</p>
      </article>
    </Link>
  )
}
export default Card