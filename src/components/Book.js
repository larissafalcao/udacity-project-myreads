import React, { Component } from "react";
import BookshelfChanger from "./BookshelfChanger";

class Book extends Component {
  render() {
    const { book, shelf, onMove } = this.props;

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${
                  book.imageLinks
                    ? book.imageLinks.thumbnail
                    : "icons/book-cover-not-found.png"
                })`,
              }}
            />
            <BookshelfChanger book={book} shelf={shelf} onMove={onMove} />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">
            {book.authors ? book.authors.join(", ") : "Unknown Author"}
          </div>
        </div>
      </li>
    );
  }
}

export default Book;
