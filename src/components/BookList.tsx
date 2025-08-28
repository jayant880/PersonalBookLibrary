// components/BookList.tsx
import type { Book } from "../types/Booktypes";
import BookCard from "./BookCard";

interface BookListProps {
    books: Book[];
}

const BookList = ({ books }: BookListProps) => {
    const readBooks = books.filter(book => book.isRead);
    const unreadBooks = books.filter(book => !book.isRead);

    return (
        <div className="space-y-6">
            {unreadBooks.length > 0 && (
                <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">To Read ({unreadBooks.length})</h3>
                    <div className="space-y-3">
                        {unreadBooks.map(book => (
                            <BookCard key={book.id} book={book} />
                        ))}
                    </div>
                </div>
            )}

            {readBooks.length > 0 && (
                <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Already Read ({readBooks.length})</h3>
                    <div className="space-y-3">
                        {readBooks.map(book => (
                            <BookCard key={book.id} book={book} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookList;