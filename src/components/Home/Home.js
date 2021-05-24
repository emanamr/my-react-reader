import React from 'react'
import Header from '../Header/Header.js'
import Shelves from '../Body/Shelves.js'
import Searchbtn from '../Search/Searchbtn.js'


function Home(props){
  
	return(
 
      <div >
		<div className="list-books">
            <div className="list-books-content">
              <Header />
              <Shelves changeShelf={props.changeShelf} books={props.books} />
             
          	</div>          	
          	<Searchbtn showSearchPage={props.showSearchPage}/>
          </div>
	  </div>
   
    );
}

export default Home