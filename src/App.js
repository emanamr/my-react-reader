import React from 'react'
import {BrowserRouter , Redirect, Route, Switch} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

import Home from './components/Home/Home.js'
import Search from './components/Search/Search.js'

class BooksApp extends React.Component {
  state = {
   
    showSearchPage: '' ,
    books:[]
  }

/* my function*/

componentDidMount(){
  //BooksAPI.getAll().then(res => console.log(res))
  BooksAPI.getAll().then(res =>this.setState({books:res})
);
}

changeShowSearch = state =>{
  this.setState ({showSearchPage: state})
}

changeShelf=(book, shelf)=>{
 // this.setState({
  //  books:this.state.books.map(item =>{ item.id === book.id ? (book.shelf=shelf):item ;
                                        BooksAPI.update(book,shelf);
                                        //localStorage.setItem('myitem', item);                                   
// })
  
//  })
   BooksAPI.getAll().then(res =>this.setState({books:res}))
}

  renderHome = () => {
    return (
     <Home changeShelf={this.changeShelf} books={this.state.books} showSearchPage={this.changeShowSearch} />
    );
  }

  renderSearch = () => {
    return (
     <Search changeShelf={this.changeShelf} showSearchPage={this.changeShowSearch} books={this.state.books} 
/*searchResult={this.searchResult} searchChange={this.searchChange}*/

/>
    );
  }


  render() {
    return (
    <BrowserRouter>
      <div className="app">
     	<Switch>
        <Route path="/search" exact render={this.renderSearch} />
        
        
        <Route path="/" exact render={this.renderHome} />
		<Redirect to='/' />
        </Switch>
      </div>
	</BrowserRouter>

);
  }
}

export default BooksApp
