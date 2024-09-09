import React from 'react';
import Book from './Book';

const Shelf = ({ title, books, isLoading }) => (
  <div className="shelf">
    <h1 className="shelf-title">{title}</h1>
    {isLoading ? (
      <h3>Loading...</h3>
    ) : (
      <div className="books-container">
        {Array.isArray(books) && books.length ? (
          books.map((book) => <Book key={book.id} book={book} />)
        ) : (
          <h3>No books found</h3>
        )}
      </div>
    )}
  </div>
);

export default Shelf;