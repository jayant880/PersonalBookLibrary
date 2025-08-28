import useBook from "../Hook/BookHook"
import type { Book } from "../types/Booktypes";

const BookView = () => {
    const { getAllBook } = useBook()
    const books: Book[] = getAllBook();
    return (
        <div><div>
            {
                books && (
                    <ul>
                        {books.map((book) => {
                            return <li key={book.id}>
                                <p>
                                    {book.title}
                                </p>
                                <p>
                                    {book.author}
                                </p>
                            </li>
                        })}
                    </ul>

                )
            }
        </div></div>
    )
}

export default BookView