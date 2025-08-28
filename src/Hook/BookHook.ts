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

  const deleteBookById = (id: string) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  return {
    books,
    createBook,
    getAllBook,
    deleteBookById,
  };
};

export default useBook;
