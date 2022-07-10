import { useDispatch, useSelector } from 'react-redux';
import Card from './Card'
const CardsGrid = () => {
  const dispatch = useDispatch()
  const booksArray = useSelector( state => state.booksArray)
  const foundResult = useSelector( state => state.foundResult)

  const addStartIndex = () => {
    dispatch({type: 'add_startIndex', changeIndex: 30})
  }
  console.log(booksArray)
  return(
    <>
      <h2 className="result">Found {foundResult} result</h2>
      <section className="cards-grid">
        {booksArray.length == undefined ? '' : booksArray.map((book) => {
        return <Card img={book.volumeInfo.imageLinks.thumbnail} description={book.volumeInfo.description} categorie={book.volumeInfo.categories} title={book.volumeInfo.title} author={book.volumeInfo.authors} />
        })}
      </section>
      <button className='more-btn' onClick={addStartIndex}>Load more</button>
    </>
  )
}
export default CardsGrid