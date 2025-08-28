// components/BookCardEdit.tsx
import { useState } from "react";
import type { Book } from "../types/Booktypes";
import { useBookForm } from "../hooks/useBookForm";
import BookFormFields from "./BookFormFields";
import { Check, X } from "lucide-react";

interface BookCardEditProps {
    book: Book;
    onSave: (updatedBook: Partial<Book>) => void;
    onCancel: () => void;
}

const BookCardEdit = ({ book, onSave, onCancel }: BookCardEditProps) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { formData, errors, handleChange, validateForm } = useBookForm({
        title: book.title,
        author: book.author,
        genre: book.genre,
        year: book.year,
        isRead: book.isRead,
        rating: book.rating,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (validateForm()) {
            onSave(formData);
        }

        setIsSubmitting(false);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-3">
            <BookFormFields formData={formData} errors={errors} onChange={handleChange} />

            <div className="flex justify-end space-x-2 pt-2">
                <button
                    type="button"
                    onClick={onCancel}
                    className="flex items-center px-3 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                >
                    <X size={16} className="mr-1" />
                    Cancel
                </button>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50 transition-colors"
                >
                    <Check size={16} className="mr-1" />
                    Save
                </button>
            </div>
        </form>
    );
};

export default BookCardEdit;