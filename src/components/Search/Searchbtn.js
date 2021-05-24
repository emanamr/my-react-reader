import React from 'react'
import {Link} from 'react-router-dom'
function Searchbtn(props){
  
	return(
 
		  <div className="open-search">
      
              <Link to='/search' onClick={()=> props.showSearchPage(true)} >Add a book</Link>

          </div>
   
    );
}

export default Searchbtn