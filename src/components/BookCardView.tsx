// components/BookCardView.tsx
import type { Book } from "../types/Booktypes";
import { Check, X, Edit3, Trash2, Eye, EyeOff } from "lucide-react";

interface BookCardViewProps {
    book: Book;
    onEdit: () => void;
    onDelete: () => void;
    onToggleRead: () => void;
}

const BookCardView = ({ book, onEdit, onDelete, onToggleRead }: BookCardViewProps) => {
    return (
        <>
            <div className="flex justify-between items-start mb-3">
                <div>
                    <h3 className="font-semibold text-lg text-gray-900">{book.title}</h3>
                    <p className="text-sm text-gray-600">by {book.author}</p>
                </div>
                <div className="flex items-center space-x-1">
                    <button
                        onClick={onToggleRead}
                        className="p-1 text-gray-500 hover:text-indigo-600 transition-colors"
                        title={book.isRead ? "Mark as unread" : "Mark as read"}
                    >
                        {book.isRead ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                    <button
                        onClick={onEdit}
                        className="p-1 text-gray-500 hover:text-indigo-600 transition-colors"
                        title="Edit book"
                    >
                        <Edit3 size={16} />
                    </button>
                    <button
                        onClick={onDelete}
                        className="p-1 text-gray-500 hover:text-red-600 transition-colors"
                        title="Delete book"
                    >
                        <Trash2 size={16} />
                    </button>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm">
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md">{book.genre}</span>
                    <span className="text-gray-600">{book.year}</span>
                    {book.rating > 0 && (
                        <div className="flex items-center">
                            <span className="text-yellow-500 mr-1">★</span>
                            <span>{book.rating}</span>
                        </div>
                    )}
                </div>

                <div className={`flex items-center px-2 py-1 rounded-md ${book.isRead ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {book.isRead ? <Check size={16} /> : <X size={16} />}
                    <span className="ml-1 text-xs">{book.isRead ? 'Read' : 'Unread'}</span>
                </div>
            </div>
        </>
    );
};

export default BookCardView;