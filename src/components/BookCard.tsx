import { useState, type FC } from "react"
import type { Book } from "../types/Booktypes"
import useBook from "../hooks/useBook";
import BookCardEdit from "./BookCardEdit";
import BookCardView from "./BookCardView";

const BookCard: FC<{ book: Book }> = ({ book }) => {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const { updateBook, deleteBookById, toggleReadStatus } = useBook();

    const handleSave = (updateBook: Partial<Book>) => {
        updateBook(book.id, updatedBook);
        setIsEditing(false);
    }

    const handleCancel = () => setIsEditing(false);

    const handleToggleRead = () => toggleReadStatus(book.id);

    const handleDelete = () => { if (window.confirm('Are you sure you want to delete this book?')) deleteBookById(book.id); }

    return (
        <div className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow">
            {isEditing ? (
                <BookCardEdit
                    book={book}
                    onSave={handleSave}
                    onCancel={handleCancel}
                />
            ) : (
                <BookCardView
                    book={book}
                    onEdit={() => setIsEditing(true)}
                    onDelete={handleDelete}
                    onToggleRead={handleToggleRead}
                />
            )}
        </div>
    )
}

export default BookCard