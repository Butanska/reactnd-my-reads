import React, { useContext } from "react";
import Shelf from "./Shelf";
import { Link } from "react-router-dom";
import { myBookContext } from "../App";
import { FcSearch } from "react-icons/fc";

const Home = () => {
  const { data, isLoading, error } = useContext(myBookContext);

  // Define an array of shelf types with corresponding titles
  const shelves = [
    { type: "currentlyReading", title: "Reading" },
    { type: "read", title: "Read" },
    { type: "wantToRead", title: "To Read" },
  ];

  const renderShelves = () =>
    shelves.map((shelf) => (
      <Shelf
        key={shelf.type}
        title={shelf.title}
        books={data.books.filter((book) => book.shelf === shelf.type)}
        isLoading={isLoading}
      />
    ));

  return (
    <main className="container">
      {error && <h1>{error}</h1>}
      {isLoading && (
        <div className="icon-holder">
          <FcSearch className="search-icon" />
          <h2 className="loading">Loading ...</h2>
        </div>
      )}
      {data && <>{renderShelves()}</>}
      <div className="add-book">
        <Link to="/search" className="link">
          +
        </Link>
      </div>
    </main>
  );
};

export default Home;
