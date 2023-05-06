import { useContext } from "react";
import { BookCard } from "../components/BookCard";
import { BookContext } from "../contexts/BookContext";

export const Favourite = () => {
  const { allBooksData, isLoading } = useContext(BookContext);

  const favouriteBooks = allBooksData?.filter(({ favourite }) => favourite);

  return (
    <div>
      <h1>Favourites</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : !favouriteBooks.length ? (
        <p>Add some books to favourites!</p>
      ) : (
        <ul>
          {favouriteBooks?.map((book) => (
            <BookCard bookData={book} key={book.id} favouriteBook />
          ))}
        </ul>
      )}
    </div>
  );
};
