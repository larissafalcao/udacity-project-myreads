import React, { Component } from "react";
import Book from "./Book";

class Bookshelf extends Component {
  render() {
    const { shelf, books, onMove } = this.props;
    const booksOnTheShelf = books.filter((book) => book.shelf === shelf.key);

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {booksOnTheShelf.map((book) => (
              <Book
                key={book.id}
                book={book}
                shelf={shelf.key}
                onMove={onMove}
              />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Bookshelf;
