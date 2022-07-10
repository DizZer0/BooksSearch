import React from 'react';
import { useEffect } from 'react';
import api from '../utils/Api';
import { useDispatch, useSelector } from 'react-redux';

function FormSearch() {
  const valueCategorieElement = React.useRef()
  const valueSortingElement = React.useRef()
  const valueSearchElement = React.useRef()
  //const [valueSearch, setValueSearch] = React.useState('')
  //const [valueSorting, setValueSorting] = React.useState('')
  //const [valueCategorie, setValueCategorie] = React.useState('')
  const dispatch = useDispatch()

  const searchParameters = useSelector( state => state.searchParameters)
  
  useEffect(() => {
    api.getBooks(searchParameters)
      .then(res => {searchParameters.valueIndex === 0 ? 
        dispatch({type: 'add_books', booksArray: res.items, foundResult: res.totalItems}) :
        dispatch({type: 'more_books', booksArray: res.items})
      })
  }, [searchParameters])
  
  
  const subFormSearch = (e) => {
    e.preventDefault()
    dispatch({type: 'search', valueSearch: valueSearchElement.current.value, 
    valueCategorie: valueCategorieElement.current.value, 
    valueSorting: valueSortingElement.current.value, 
    valueIndex: 0
  })
  }

  return(
    <form onSubmit={subFormSearch} className='searcher'>
      <fieldset className='searcher__inputs'>
        <div className='searcher__container'>
          <input className='searcher__search' ref={valueSearchElement}></input>
          <button type="submit" className='searcher__sub-btn'>Search</button>
        </div>
        <span className='searcher__categories'>
          Categories
          <select className='searcher__select' ref={valueCategorieElement}>
            <option className='' value='all'>all</option>
            <option className='' value='art'>art</option>
            <option className='' value='biography'>biography</option>
            <option className='' value='computers'>computers</option>
            <option className='' value='history'>history</option>
            <option className='' value='medical'>medical</option>
            <option className='' value='poetry'>poetry</option>
          </select>
        </span>
        <span className='searcher__sorting'>
          Sorting by
          <select className='searcher__select'  ref={valueSortingElement}>
            <option className=''>relevance </option>
            <option className=''>newest</option>
          </select>
        </span>
      </fieldset>
    </form>  
  )
}
export default FormSearch