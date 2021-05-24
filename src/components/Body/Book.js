import React from 'react'
import BookShelfChange from './BookShelfChange.js'

function Book(props){
const book= props.book  
const displayedBook = book.imageLinks ? book.imageLinks.thumbnail : ''
    return (
       <div>
      	
		  <div className="book">
		  <div className="book-top">
		  <div className="book-cover" 
style={{ width: 128, height: 192, backgroundImage: `url("${displayedBook}")` }}>
		  </div>
		  <BookShelfChange currentShelf={props.currentShelf} book={book} changeShelf={props.changeShelf} />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
          </div>
        

	  </div>
);
  }


export default Book