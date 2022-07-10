import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter } from 'react-router-dom';

const defaultState = {
  searchParameters: {
    startIndex: '0',
    valueSearch: '',
    valueCategorie: '',
    valueSorting: ''
  },
  foundResult: 0,
  booksArray: {},
  book: {}
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'more_books' :
      return {...state, booksArray: state.booksArray.concat(action.booksArray)}
    case 'add_books': 
      return {...state, booksArray: action.booksArray, foundResult: action.foundResult}
    case 'search': 
      return {...state, searchParameters: {valueSearch: action.valueSearch, valueCategorie: action.valueCategorie, valueSorting: action.valueSorting, valueIndex: action.valueIndex}}
    case 'add_startIndex': 
      return {...state, searchParameters: {...state.searchParameters, valueIndex: state.searchParameters.valueIndex + action.changeIndex}}
    case 'reset_startIndex':
      return {...state, startIndex: action.changeIndex}
    case 'sub_formSearch':
      return {...state, valueSearch: action.valueSearch, valueCategorie: action.valueCategorie, valueSorting: action.valueSorting}
      case 'select_book' :
        return {...state, book: action.changeBook}
    default:
      return state
  }
}
const store = createStore(reducer, composeWithDevTools())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
