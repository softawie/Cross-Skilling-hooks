import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import { Book } from "../components";
import Loader from "../loader";
const Search = () => {
  const [query, setQuery] = useState("");
  const [searchresults, setSearchresults] = useState([]);
  const [List, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    BooksAPI.getAll().then((List) => {
      setList(List);
      setLoading(false);
    });
  }, [List, searchresults]);

  const handleSearch = async (e) => {
    try {
      setQuery(e.target.value); // for update query value
      await BooksAPI.search(e.target.value).then((e) => {
        // for test if it is already array as document guide here .. >>>
        if (Array.isArray(e)) {
          //  https://www.w3schools.com/jsref/jsref_isarray.asp
          setSearchresults(e);
        }
      });
    } catch (err) {
      throw err;
    }
  };

  const onChangeShelf = async (id, event) => {
    try {
      setLoading(true);
      const booksList = List;
      const book = booksList.filter((book) => book.id === id)[0]; // getting book with id
      await BooksAPI.update(book, event.target.value) // for update api data
        .then(() => {
          setList(booksList);
          setLoading(false);
        });
    } catch (err) {
      throw err;
    }
  };

  const onChangeShelfResult = async (id, event) => {
    try {
      setLoading(true);
      const book = searchresults.filter((book) => book.id === id)[0]; // getting book with id
      const res = await BooksAPI.update(book, event.target.value); // for update api data
      if (res) {
        setList(res);
        setLoading(false);
        alert(`your book already add to ${event.target.value}`); // just alert for fun}catch(){}
      }
    } catch (err) {
      throw err;
    }
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
          <div>
            {/* for test query*/}
            {/* {JSON.stringify(query)} */}
          </div>

          <input
            type="text"
            placeholder="title or author"
            value={query}
            onChange={handleSearch}
          />
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="search-books-results">
          <ol className="books-grid">
            {query !== ""
              ? searchresults.map((book) => (
                  <Book
                    book={book}
                    onChangeShelf={onChangeShelfResult}
                    key={book.id}
                  />
                ))
              : List.map((book) => (
                  <Book
                    book={book}
                    onChangeShelf={onChangeShelf}
                    key={book.id}
                  />
                ))}
          </ol>
        </div>
      )}
    </div>
  );
};
// }

// Search.propTypes = {
//   searchresults: PropTypes.array.isRequired,
//   query: PropTypes.string.isRequired,
//   List: PropTypes.array.isRequired,
// };
export default Search;
