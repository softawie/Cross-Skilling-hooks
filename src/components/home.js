import React, { useState, useEffect } from "react";
import * as BooksAPI from "../BooksAPI";
import Loader from "../loader";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import Shelf from "./shelf";

const BooksApp = (props) => {
  const [List, setList] = useState([null]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    await BooksAPI.getAll().then((List) => setList(List));
    setLoading(false);
  };
  useEffect(() => {
    loadData();
  }, [List]);

  const onChangeShelf = (id, event) => {
    try {
      const booksList = List;
      const book = booksList.filter((book) => book.id === id)[0]; // getting book with id
      book.shelf = event.target.value;
      BooksAPI.update(book, book.shelf) // for update api data
        .then(() => {
          setList(booksList);
          // alert(`your book already add to ${book.shelf}`); // just alert for fun
        });
    } catch (err) {
      throw err;
    }
  };
  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          {loading ? (
            <Loader />
          ) : (
            <div>
              {/* /////////Currently Reading///////////// */}
              <Shelf
                title={"Currently Reading"}
                type={"currentlyReading"}
                List={List}
                onChangeShelf={onChangeShelf}
              />

              {/* /////////Want to Read///////////// */}
              <Shelf
                title={"Want to Read"}
                type={"wantToRead"}
                List={List}
                onChangeShelf={onChangeShelf}
              />
              {/* //////// Read ///////// */}
              <Shelf
                title={"Read"}
                type={"read"}
                List={List}
                onChangeShelf={onChangeShelf}
              />
            </div>
          )}
        </div>

        {/* ////////// search icon ///////// */}

        <Link to="/search" className="open-search">
          <div className="open-search">
            <button>Add a book</button>
            search
          </div>
        </Link>
      </div>
    </div>
  );
};
// }
// BooksApp.propTypes = {
//   List: PropTypes.array.isRequired,
//   // onChangeShelf: PropTypes.object.isRequired,
// };

export default BooksApp;
