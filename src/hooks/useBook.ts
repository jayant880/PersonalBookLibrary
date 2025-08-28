// hooks/useBook.ts
import { useContext } from "react";
import { BookContext } from "../Context/BookContext";
import type { Book, BookFormData } from "../types/Booktypes";

export const useBook = () => {
  const context = useContext(BookContext);
  if (!context) throw new Error("useBook must be used within BookProvider");

  const { books, setBooks } = context;

  const createBook = (newBook: BookFormData) => {
    const bookWithId: Book = {
      ...newBook,
      id: crypto.randomUUID(),
    };

    setBooks((prev) => [...prev, bookWithId]);
    return bookWithId;
  };

  const getAllBooks = () => books;

  const getBookById = (id: string) => {
    return books.find((book) => book.id === id);
  };

  const deleteBookById = (id: string) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  const updateBook = (id: string, updatedBook: Partial<BookFormData>) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === id ? { ...book, ...updatedBook } : book
      )
    );
  };

  const toggleReadStatus = (id: string) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === id ? { ...book, isRead: !book.isRead } : book
      )
    );
  };

  return {
    books,
    createBook,
    getAllBooks,
    getBookById,
    deleteBookById,
    updateBook,
    toggleReadStatus,
  };
};

export default useBook;
