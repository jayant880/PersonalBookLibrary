import { createContext, type Dispatch, type SetStateAction } from "react";
import type { Book } from "../types/Booktypes";

interface BookContextType {
    books: Book[];
    setBooks: Dispatch<SetStateAction<Book[]>>;
}

export const BookContext = createContext<BookContextType | undefined>(undefined);