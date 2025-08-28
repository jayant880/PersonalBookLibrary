// components/BookView.tsx
import useBook from "../hooks/useBook";
import BookList from "./BookList";
import BooksStats from "./BookStats";

const BookView = () => {
    const { getAllBooks } = useBook();
    const books = getAllBooks();

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <BooksStats books={books} />

            <div className="mt-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b">
                    Your Library {books.length > 0 && `(${books.length})`}
                </h2>

                {books.length === 0 ? (
                    <div className="text-center py-12">
                        <div className="mx-auto h-12 w-12 text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                            </svg>
                        </div>
                        <h3 className="mt-2 text-sm font-medium text-gray-900">No books</h3>
                        <p className="mt-1 text-sm text-gray-500">Get started by adding a new book.</p>
                    </div>
                ) : (
                    <BookList books={books} />
                )}
            </div>
        </div>
    );
};

export default BookView;