// components/BookFormFields.tsx
import type { BookFormData, ValidationErrors } from '../types/Booktypes'

interface BookFormFieldsProps {
    formData: BookFormData;
    errors: ValidationErrors;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const BookFormFields = ({ formData, errors, onChange }: BookFormFieldsProps) => {
    const currentYear = new Date().getFullYear();
    const yearOptions = Array.from({ length: currentYear - 1899 }, (_, i) => currentYear - i);

    return (
        <>
            <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                    Title *
                </label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={formData.title}
                    onChange={onChange}
                    className={`block w-full rounded-md border ${errors.title ? 'border-red-500' : 'border-gray-300'} p-2 focus:border-indigo-500 focus:ring-indigo-500`}
                    placeholder="Enter book title"
                />
                {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
            </div>

            <div>
                <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">
                    Author *
                </label>
                <input
                    type="text"
                    name="author"
                    id="author"
                    value={formData.author}
                    onChange={onChange}
                    className={`block w-full rounded-md border ${errors.author ? 'border-red-500' : 'border-gray-300'} p-2 focus:border-indigo-500 focus:ring-indigo-500`}
                    placeholder="Enter author name"
                />
                {errors.author && <p className="mt-1 text-sm text-red-600">{errors.author}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="genre" className="block text-sm font-medium text-gray-700 mb-1">
                        Genre *
                    </label>
                    <input
                        type="text"
                        name="genre"
                        id="genre"
                        value={formData.genre}
                        onChange={onChange}
                        className={`block w-full rounded-md border ${errors.genre ? 'border-red-500' : 'border-gray-300'} p-2 focus:border-indigo-500 focus:ring-indigo-500`}
                        placeholder="e.g. Fiction"
                    />
                    {errors.genre && <p className="mt-1 text-sm text-red-600">{errors.genre}</p>}
                </div>

                <div>
                    <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
                        Publication Year *
                    </label>
                    <select
                        name="year"
                        id="year"
                        value={formData.year}
                        onChange={onChange}
                        className={`block w-full rounded-md border ${errors.year ? 'border-red-500' : 'border-gray-300'} p-2 focus:border-indigo-500 focus:ring-indigo-500`}
                    >
                        {yearOptions.map(year => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                    </select>
                    {errors.year && <p className="mt-1 text-sm text-red-600">{errors.year}</p>}
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-1">
                        Rating
                    </label>
                    <select
                        name="rating"
                        id="rating"
                        value={formData.rating}
                        onChange={onChange}
                        className={`block w-full rounded-md border ${errors.rating ? 'border-red-500' : 'border-gray-300'} p-2 focus:border-indigo-500 focus:ring-indigo-500`}
                    >
                        {[0, 1, 2, 3, 4, 5].map(rating => (
                            <option key={rating} value={rating}>
                                {rating === 0 ? 'Not rated' : '★'.repeat(rating)}
                            </option>
                        ))}
                    </select>
                    {errors.rating && <p className="mt-1 text-sm text-red-600">{errors.rating}</p>}
                </div>

                <div className="flex items-end">
                    <div className="flex items-center h-10">
                        <input
                            type="checkbox"
                            id="isRead"
                            name="isRead"
                            checked={formData.isRead}
                            onChange={onChange}
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label htmlFor="isRead" className="ml-2 block text-sm text-gray-900">
                            I've read this book
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookFormFields;