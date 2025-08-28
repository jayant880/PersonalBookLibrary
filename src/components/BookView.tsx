import useBook from "../Hook/BookHook"
import type { Book } from "../types/Booktypes";
import BookCard from "./BookCard";

const BookView = () => {
    const { getAllBook } = useBook();
    const books: Book[] = getAllBook();
    return (
        <div className="px-3 py-2 shadow flex-1 m-3 ">
            <div>
                {
                    books && (
                        <ul className="flex flex-col gap-3">
                            {books.map((book) => {
                                return <BookCard book={book} key={book.id} />
                            })}
                        </ul>

                    )
                }
            </div></div>
    )
}

export default BookView