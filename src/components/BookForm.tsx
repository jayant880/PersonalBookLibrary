import { useState, type ChangeEvent, type FC, type FormEvent } from "react"
import type { Book } from "../types/Booktypes"
import useBook from "../Hook/BookHook";

const INITIAL_BOOK: Book = {
    id: '',
    title: '',
    author: '',
    genre: '',
    isRead: false,
    year: 0,
    rating: 0,
}

const BookForm: FC = () => {
    const { createBook } = useBook()
    const [book, setBook] = useState<Book>(INITIAL_BOOK);
    const [error, setError] = useState<boolean>(false);
    const [yearError, setYearError] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

        setBook(prev => {
            return {
                ...prev,
                [name]: type === 'checkbox' ? checked : value
            }
        });
    }
    const validateCreateBook = () => {
        setError(false);
        const currentYear = new Date().getFullYear();
        if (book.year > currentYear) {
            setYearError('Year cannot be more than current year');
            setError(true);
        }
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        validateCreateBook();

        if (!error) {
            const newBook: Book = {
                ...book,
                id: crypto.randomUUID()
            }
            createBook(newBook);
        }
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <form className="border-2 bg-gray-100 m-2 p-3 rounded-xl border-none shadow-2xl" onSubmit={handleSubmit}>
                <h3 className="text-2xl font-bold text-blue-500 mb-2 underline underline-offset-4">Book Details :</h3>
                <div className="flex justify-between items-center gap-2 bg-gray-50 p-2 ">
                    <label htmlFor="title" className="font-bold capitalize">Title :</label>
                    <input type="text" name="title" id="title" value={book.title} placeholder="Book Title" onChange={handleChange} className="bg-white rounded p-2 focus:outline-blue-200" />

                </div>
                <div className="flex justify-between items-center gap-2 bg-gray-50 p-2 ">
                    <label htmlFor="author" className="font-bold capitalize">author :</label>
                    <input type="text" name="author" id="author" value={book.author} placeholder="Book's Author" onChange={handleChange} className="bg-white rounded p-2 focus:outline-blue-200" />
                </div>
                <div className="flex justify-between items-center gap-2 bg-gray-50 p-2 ">
                    <label htmlFor="genre" className="font-bold capitalize">genre :</label>
                    <input type="text" name="genre" id="genre" value={book.genre} placeholder="Book's Genre" onChange={handleChange} className="bg-white rounded p-2 focus:outline-blue-200" />
                </div>
                <div className="flex justify-between items-center gap-2 bg-gray-50 p-2 ">
                    <label htmlFor="year" className="font-bold capitalize">year :</label>
                    <input type="number" name="year" id="year" value={book.year} placeholder="Book's Genre" onChange={handleChange} className="bg-white rounded p-2 focus:outline-blue-200" />
                    {yearError === '' && <span>{yearError}</span>}
                </div>
                <div className="flex justify-between items-center gap-2 bg-gray-50 p-2 ">
                    <label htmlFor="rating" className="font-bold capitalize">rating :</label>
                    <select className="bg-white rounded p-2 focus:outline-blue-200" name="rating" value={book.rating} onChange={handleChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="flex justify-between items-center gap-2 bg-gray-50 p-2 ">
                    <label htmlFor="isRead" className="font-bold capitalize">Completed :</label>
                    <input
                        type="checkbox"
                        id="isRead"
                        name="isRead"
                        checked={book.isRead}
                        onChange={handleChange}
                        className="w-4 h-4"
                    />
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded">Add Book</button>
            </form>
        </div>
    )
}

export default BookForm