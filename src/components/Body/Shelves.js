import React from 'react'

import ShelfOfBooks from './ShelfOfBooks.js'



function Shelves(props){
  
  const allBooks=props.books;
 // console.log(allBooks);
  
  const current=allBooks.filter(book=> book.shelf==="currentlyReading");
  const wanted=allBooks.filter(book=> book.shelf==="wantToRead");
  const read=allBooks.filter(book=> book.shelf==="read");
 // console.log(current , wanted ,read);
	return(
    <div>
     
      <ShelfOfBooks books={current}  currentShelf={"currentlyReading"} changeShelf={props.changeShelf} />
      <ShelfOfBooks books={wanted}  currentShelf={"wantToRead"} changeShelf={props.changeShelf} />
      <ShelfOfBooks books={read}  currentShelf={"read"} changeShelf={props.changeShelf}/>
    </div>
    );
}

export default Shelves