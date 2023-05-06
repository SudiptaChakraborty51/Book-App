import { createContext, useEffect, useState } from "react";
import { fakeFetch } from "../fakeFetch";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [allBooksData, setAllBooksData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchBooks = async () => {
    try {
      setIsLoading(true);
      const {
        status,
        data: { books, user }
      } = await fakeFetch("https://example.com/api/books");
      if (status === 200) {
        setAllBooksData(books);
        setUserData(user);
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleFavourite = (selectedBook) => {
    const favouriteBooks = allBooksData?.map((book) =>
      book.id === selectedBook.id ? { ...book, favourite: true } : book
    );
    setAllBooksData(favouriteBooks);
  };

  const isBookInFav = (selectedBook) =>
    allBooksData?.find(({ id }) => id === selectedBook.id).favourite;

  const handleRead = (selectedBook) => {
    const readBooks = allBooksData?.map((book) =>
      book.id === selectedBook.id ? { ...book, read: !book.read } : book
    );
    setAllBooksData(readBooks);
  };

  return (
    <BookContext.Provider
      value={{
        allBooksData,
        userData,
        isLoading,
        handleFavourite,
        isBookInFav,
        handleRead
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
