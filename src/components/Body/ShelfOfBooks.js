import React from 'react'

import Book from './Book.js'
//class Current extends React.Component {
//  render() {
function ShelfOfBooks(props){
    return (
       <div className="bookshelf">
                  <h2 className="bookshelf-title">{props.currentShelf}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
					   {props.books.map(book=> (
                         <li key={book.id}>
                           <Book book={book} changeShelf={props.changeShelf} currentShelf={props.currentShelf}/>
						 </li>
))}
                    </ol>
                  </div>
                </div>
);
  }


export default ShelfOfBooks
