import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BookContext } from "../contexts/BookContext";

export const BookCard = ({ bookData, favouriteBook, readBook }) => {
  const { id, title, author, image, read } = bookData;
  const { handleFavourite, handleRead, isBookInFav } = useContext(BookContext);

  return (
    <>
      <li key={id}>
        <img src={image} alt={title} className="card-img" />
        <p>
          <strong>Id:</strong> {id}
        </p>
        <p>
          <strong>Title:</strong> {title}
        </p>
        <p>
          <strong>Author:</strong> {author}
        </p>

        {!readBook && (
          <button
            disabled={read}
            onClick={() => handleRead(bookData)}
            style={{
              backgroundColor: read ? "transparent" : "#0284c7",
              border: read ? "2px solid white" : "none"
            }}
          >
            {read ? "Already read" : "Mark as read"}
          </button>
        )}
        <br />

        {!favouriteBook && (
          <button onClick={() => handleFavourite(bookData)}>
            {isBookInFav(bookData) ? (
              <NavLink to="/favourite" className="nav-link">
                Go to Fav
              </NavLink>
            ) : (
              "Add to Fav"
            )}
          </button>
        )}
      </li>
    </>
  );
};
