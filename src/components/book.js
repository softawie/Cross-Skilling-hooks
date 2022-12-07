import React from "react";
import PropTypes from "prop-types";
import "../App.css";

const Book = (props) => {
  const { book, onChangeShelf } = props;
  const { shelf, title, authors, publisher, publishedDate, id } = book;

  if (!book.shelf) {
    book.shelf = "none";
  }
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <img
            className="img-responsive"
            alt=""
            src={book.imageLinks && book.imageLinks.smallThumbnail}
          />

          <div className="book-shelf-changer">
            <select
              value={shelf || "none"}
              onChange={(event) => onChangeShelf(id, event)}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        {title ? <div className="book-title"> {title} </div> : null}
        <div className="book-authors">
          {authors ? (
            <p>
              <strong>Authors: </strong>
              {authors}
            </p>
          ) : null}
        </div>

        <div>
          {publisher ? (
            <p>
              <strong>Publisher: </strong>
              {publisher}
            </p>
          ) : null}
          {publishedDate ? (
            <p>
              <strong>Published Date : </strong>
              {publishedDate}
            </p>
          ) : null}
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  // onChangeShelf: PropTypes.object.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
};

export default Book;
