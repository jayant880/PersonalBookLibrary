import { Check, Star, X } from "lucide-react";
import useBook from "../Hook/BookHook"
import type { Book } from "../types/Booktypes";

const BookView = () => {
    const { getAllBook } = useBook()
    const books: Book[] = getAllBook();
    return (
        <div className="px-3 py-2 shadow flex-1 m-3 ">
            <div>
                {
                    books && (
                        <ul className="flex flex-col gap-3">
                            {books.map((book) => {
                                return <li key={book.id}>
                                    <div className="px-3 py-2 shadow bg-gray-100 rounded">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-baseline gap-3">
                                                <h3 className="text-2xl font-semibold font-serif">{book.title}</h3>
                                                <p className="text-xs text-gray-500 font-semibold">by {book.author}</p>
                                            </div>
                                            {book.isRead ? <Check className="w-4 h-4 text-green-400" /> : <X className="w-4 h-4 text-red-400" />}
                                        </div>
                                        <div className="flex justify-between">
                                            {book.genre && (<p>Genre: {book.genre}</p>)}
                                            {book.year !== 0 && <p>in Year: {book.year}</p>}
                                            {book.rating !== 0 && <div className="flex items-baseline">
                                                Rating : {[...Array(5)].map((_, index) => (
                                                    <Star key={index} className={`w-4 h-4 ${index < book.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} fill={index < book.rating ? 'currentColor' : 'none'} />
                                                ))}</div>}
                                        </div>
                                    </div>
                                </li>
                            })}
                        </ul>

                    )
                }
            </div></div>
    )
}

export default BookView