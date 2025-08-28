import { type FC, type ReactNode } from "react";
import { BookContext } from "./BookContext";
import type { Book } from "../types/Booktypes";
import { useLocalStorage } from "../hooks/useLocalStorage";

const BookProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [books, setBooks] = useLocalStorage<Book[]>('books', []);

    return (
        <BookContext.Provider value={{ books, setBooks }}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;