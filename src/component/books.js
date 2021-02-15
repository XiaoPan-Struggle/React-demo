import React from 'react';
import Context from "../Context";
import ajax from "../ajax";

function Books() {
    const {state,dispatchC} = React.useContext(Context)
    React.useEffect(() => {
        ajax('/books').then(books => {
            dispatchC({type:'setBooks',books:books})
        })
    },[])
    return(
        <div>
            <h1>我的书籍</h1>
            <div>书籍：{state.books ? state.books.map(book => <li
                key={book.id}>{book.name}</li>):""}</div>
        </div>
    )
}
export default Books