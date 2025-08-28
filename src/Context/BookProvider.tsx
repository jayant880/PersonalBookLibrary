import { useState, type FC, type ReactNode } from "react";
import { BookContext } from "./BookContext";
import type { Book } from "../types/Booktypes";

const BookProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [books, setBooks] = useState<Book[]>([]);

    return (
        <BookContext.Provider value={{ books, setBooks }}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;