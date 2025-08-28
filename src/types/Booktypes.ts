export interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  year: number;
  isRead: boolean;
  rating: number;
}

export type BookFormData = Omit<Book, "id">;

export interface ValidationErrors {
  title?: string;
  author?: string;
  genre?: string;
  year?: string;
  rating?: string;
}
