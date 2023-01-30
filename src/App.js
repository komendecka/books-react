import BookForm from "./components/BookForm/BookForm";
import BooksList from "./components/BooksList/BooksList";
import {useState} from 'react'
import {shortid} from 'shortid'

const App = () => {

     const [books, setBooks] = useState([
        { id: 1, title: 'of the mice and Men', author: 'john Steinbeck'},
        { id: 2, title: 'theWitcher', author: 'andrzej sapkowski'}
    ]);

     const removeBook = bookId => {
         setBooks(books.filter(book => book.id !==bookId))
     };

     const addBook = newBook => {
         setBooks([...books, {id: shortid(), title: newBook.title, author: newBook.author}]);
     };

  return (
    <div>
        <h1> BooksApp </h1>
        <BooksList books={books} removeBook={removeBook} />
        <BookForm addBook={addBook}/>
    </div>

  );
}

export default App;
