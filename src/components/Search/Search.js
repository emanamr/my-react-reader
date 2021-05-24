import React from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from '../../BooksAPI'  
import Book from '../Body/Book.js'

class Search extends React.Component {
  state={
    query: '',
    searchBooks:[]
  }
updateQuery=(query) =>{
  this.setState({query:query})
  console.log(query)
}

clearQuery=() =>{
  this.setState({query: '' })
}



searchChange=(query) =>{
  this.updateQuery(query)
  this.searchResult(query)
}  
searchResult=(query) =>{
  if(query){
   // BooksAPI.search().then(res => console.log(res))
    
    BooksAPI.search(query).then((searchBooks)=>{
      if(searchBooks.error){
        this.setState({searchBooks:[]})
      }else{
        this.setState({searchBooks : searchBooks})
      }

    })}
  else{
    this.setState({searchBooks:[]})
  }
  
}
 

  render(){
  
	return(
     
   <div className="search-books">
            <div className="search-books-bar">
              <Link to='/' className="close-search" onClick={() => this.props.showSearchPage(false)} >Close</Link>
              <div className="search-books-input-wrapper">
               
                <input type="text" placeholder="Search by title or author" 
			value={this.state.query}
			onChange={(event) => this.searchChange(event.target.value)}
/>

              </div>
            </div>
            <div className="search-books-results">

              <ol className="books-grid">
				{
                  this.state.searchBooks.map(searchBook=> {
                 let currentShelf="none";
                 this.props.books.map(book=>(
                   book.id===searchBook.id ? currentShelf=book.shelf : ''
                 
                 ));
				 return(
                  <li key={searchBook.id}>
					<Book book={searchBook} changeShelf={this.props.changeShelf} currentShelf={currentShelf}/>
				  </li>
                 );
})
}
			  </ol>
            </div>
          </div>
   
    );
}
}

export default Search