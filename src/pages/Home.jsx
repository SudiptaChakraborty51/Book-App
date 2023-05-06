import { useContext } from "react";
import { BookCard } from "../components/BookCard";
import { BookContext } from "../contexts/BookContext";

export const Home = () => {
  const { allBooksData, isLoading } = useContext(BookContext);

  return (
    <div>
      <h1>All Books</h1>
      {isLoading && <p>Loading Books...</p>}
      <ul>
        {allBooksData?.map((book) => (
          <BookCard bookData={book} key={book.id} />
        ))}
      </ul>
    </div>
  );
};
