import { useState, type ChangeEvent, type FC } from "react"
import type { Book } from "../types/Booktypes"
import { Check, Star, X } from "lucide-react"
import useBook from "../Hook/BookHook"

const BookCard: FC<{ book: Book }> = ({ book }) => {
    const { deleteBookById, updateBook } = useBook();
    const [updatedBook, setUpdatedBook] = useState<Book>(book);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

        setUpdatedBook(prev => {
            return {
                ...prev,
                [name]: type === 'checkbox' ? checked : value
            }
        });
    }
    const handleSave = () => {
        // validateBook();
        setIsEditing(false);
        updateBook(updatedBook);
    }

    return (
        <li key={book.id}>
            {
                isEditing ? (
                    <div className="px-3 py-2 shadow bg-gray-100 rounded flex flex-col gap-3">
                        <div className="flex justify-between items-center">
                            <div className="flex items-baseline gap-3">
                                <h3 className="text-2xl font-semibold font-serif"><input type="text" name='title' value={updatedBook.title} onChange={handleChange} /></h3>
                                <p className="text-xs text-gray-500 font-semibold">by <input type="text" name='author' value={updatedBook.author} onChange={handleChange} /></p>
                            </div>
                            <p>
                                Completed : <input type="checkbox" name='isRead' checked={updatedBook.isRead} onChange={handleChange} />
                            </p>
                        </div>
                        <div className="flex justify-between">
                            {updatedBook.genre && (<p>Genre: <input type="text" name='genre' value={updatedBook.genre} onChange={handleChange} /></p>)}
                            {updatedBook.year !== 0 && <p>in Year: <input type="number" name='year' value={updatedBook.year} onChange={handleChange} /></p>}
                            {updatedBook.rating !== 0 && <div className="flex items-baseline">
                                Rating :
                                <select className="bg-white rounded p-2 focus:outline-blue-200" name="rating" value={updatedBook.rating} onChange={handleChange}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            }
                        </div>
                        <div className="flex gap-2">
                            <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded" onClick={() => setIsEditing(!isEditing)}>Cancel</button>
                            <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-2 px-4 rounded" onClick={handleSave}>Save</button>
                            <button className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => deleteBookById(book.id)}>Delete</button>
                        </div>
                    </div>
                ) : (
                    <div className="px-3 py-2 shadow bg-gray-100 rounded flex flex-col gap-3">
                        <div className="flex justify-between items-center">
                            <div className="flex items-baseline gap-3">
                                <h3 className="text-2xl font-semibold font-serif">{updatedBook.title}</h3>
                                <p className="text-xs text-gray-500 font-semibold">by {updatedBook.author}</p>
                            </div>
                            {updatedBook.isRead ? <Check className="w-4 h-4 text-green-400" /> : <X className="w-4 h-4 text-red-400" />}
                        </div>
                        <div className="flex justify-between">
                            {updatedBook.genre && (<p>Genre: {updatedBook.genre}</p>)}
                            {updatedBook.year !== 0 && <p>in Year: {updatedBook.year}</p>}
                            {updatedBook.rating !== 0 && <div className="flex items-baseline">
                                Rating : {[...Array(5)].map((_, index) => (
                                    <Star key={index} className={`w-4 h-4 ${index < updatedBook.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} fill={index < updatedBook.rating ? 'currentColor' : 'none'} />
                                ))}</div>}
                        </div>
                        <div className="flex gap-2">
                            <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded" onClick={() => setIsEditing(!isEditing)}>Edit</button>
                            <button className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => deleteBookById(book.id)}>Delete</button>
                        </div>
                    </div>
                )
            }
        </li>
    )
}

export default BookCard