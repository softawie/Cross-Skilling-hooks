import React from "react";

const Home = React.lazy(() => import("./home"));
const Book = React.lazy(() => import("./book"));
const Search = React.lazy(() => import("./search"));

export { Home, Book, Search };
