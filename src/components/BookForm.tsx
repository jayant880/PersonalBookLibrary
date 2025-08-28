import { type FC, type FormEvent } from "react"
import type { BookFormData } from "../types/Booktypes"
import useBook from "../hooks/useBook";
import { useBookForm } from "../hooks/useBookForm";
import BookFormFields from "./BookFormFields";

const INITIAL_BOOK: BookFormData = {
    title: '',
    author: '',
    genre: '',
    isRead: false,
    year: new Date().getFullYear(),
    rating: 0,
}

const BookForm: FC = () => {
    const { createBook } = useBook()
    const { formData, errors, handleChange, validateForm, resetForm } = useBookForm(INITIAL_BOOK);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        createBook(formData);
        resetForm();
    }

    return (
        <div className="bg-white rounded-lg shadow-md p-6 h-fit">
            <h2 className="text-xl font-semibold text-gray-800 mb-6 pb-2 border-b">Add new Book</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <BookFormFields formData={formData} errors={errors} onChange={handleChange} />
                <div className="flex gap-3 pt-4">
                    <button type="button" onClick={resetForm} className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">Reset</button>
                    <button type="submit" className="flex-1  px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">Add Book</button>
                </div>
            </form>
        </div>
    )
}

export default BookForm;