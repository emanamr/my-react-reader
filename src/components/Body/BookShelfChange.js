import React from 'react'

//class Current extends React.Component {
//  render() {
function BookShelfChange(props){

    return (

                            <div className="book-shelf-changer">
                              <select value={props.currentShelf} onChange={(e) => props.changeShelf(props.book , e.target.value)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
              
);
  }


export default BookShelfChange