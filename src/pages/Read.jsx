import { useContext } from "react";
import { BookCard } from "../components/BookCard";
import { BookContext } from "../contexts/BookContext";

export const Read = () => {
  const { allBooksData, isLoading } = useContext(BookContext);

  const readBooks = allBooksData?.filter(({ read }) => read);

  return (
    <div>
      <h1>Read books</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : !readBooks.length ? (
        <p>Add some books to read!</p>
      ) : (
        <ul>
          {readBooks?.map((book) => (
            <BookCard bookData={book} key={book.id} readBook />
          ))}
        </ul>
      )}
    </div>
  );
};
