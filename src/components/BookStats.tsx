// components/BooksStats.tsx
import type { Book } from "../types/Booktypes";

interface BooksStatsProps {
    books: Book[];
}

const BooksStats = ({ books }: BooksStatsProps) => {
    const totalBooks = books.length;
    const readBooks = books.filter(book => book.isRead).length;
    const unreadBooks = totalBooks - readBooks;
    const averageRating = books.length > 0
        ? (books.reduce((sum, book) => sum + book.rating, 0) / books.length).toFixed(1)
        : "0.0";

    if (totalBooks === 0) return null;

    return (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <div className="text-2xl font-bold text-blue-800">{totalBooks}</div>
                <div className="text-sm text-blue-600">Total Books</div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                <div className="text-2xl font-bold text-green-800">{readBooks}</div>
                <div className="text-sm text-green-600">Books Read</div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                <div className="text-2xl font-bold text-yellow-800">{unreadBooks}</div>
                <div className="text-sm text-yellow-600">To Read</div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                <div className="text-2xl font-bold text-purple-800">{averageRating}</div>
                <div className="text-sm text-purple-600">Avg Rating</div>
            </div>
        </div>
    );
};

export default BooksStats;