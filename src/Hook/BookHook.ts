import { useContext } from "react";
import { BookContext } from "../Context/BookContext";
import type { Book } from "../types/Booktypes";

const useBook = () => {
  const context = useContext(BookContext);
  if (!context) throw new Error("useBook must be used within BookProivder");

  const { books, setBooks } = context;

  const createBook = (newBook: Book) => {
    setBooks((prev) => [...prev, newBook]);
  };

  const getAllBook = () => books;

  return {
    books,
    createBook,
    getAllBook,
  };
};

export default useBook;
