import React from "react";
import { Book } from "../components";

const Shelf = ({ title, List, onChangeShelf, type }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {List.map((book) =>
            book.shelf === type ? (
              <Book book={book} onChangeShelf={onChangeShelf} key={book.id} />
            ) : null
          )}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;
