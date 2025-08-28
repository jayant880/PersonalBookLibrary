import { useState, type ChangeEvent } from "react";
import type { BookFormData, ValidationErrors } from "../types/Booktypes";

export const useBookForm = (initialData: BookFormData) => {
  const [formData, setFormData] = useState<BookFormData>(initialData);
  const [errors, setErrors] = useState<ValidationErrors>({});

  const validateField = (
    name: string,
    value: string | number | boolean
  ): string | undefined => {
    switch (name) {
      case "title":
        if (typeof value === "string" && !value.trim())
          return "Title is required";
        if (typeof value === "string" && value.length > 100)
          return "Title must be less than 100 characters";
        break;
      case "author":
        if (typeof value === "string" && !value.trim())
          return "Author is required";
        if (typeof value === "string" && value.length > 50)
          return "Author must be less than 50 characters";
        break;
      case "genre":
        if (typeof value === "string" && !value.trim())
          return "Genre is required";
        break;
      case "year":
        if (typeof value === "number") {
          const currentYear = new Date().getFullYear();
          if (value < 1000) return "Year must be a valid year";
          if (value > currentYear)
            return `Year cannot be more than ${currentYear}`;
        }
        break;
      case "rating":
        if (typeof value === "number" && (value < 0 || value > 5)) {
          return "Rating must be between 0 and 5";
        }
        break;
    }
  };

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};

    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key as keyof BookFormData]);
      if (error) {
        newErrors[key as keyof ValidationErrors] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    let proccessedValue: string | number | boolean = value;

    if (type === "number") proccessedValue = value === "" ? 0 : Number(value);
    else if (type === "checkbox")
      proccessedValue = (e.target as HTMLInputElement).checked;

    const error = validateField(name, proccessedValue);
    setErrors((prev) => ({ ...prev, [name]: error }));

    setFormData((prev) => ({
      ...prev,
      [name]: proccessedValue,
    }));
  };

  const resetForm = () => {
    setFormData(initialData);
    setErrors({});
  };

  return {
    formData,
    errors,
    handleChange,
    validateForm,
    resetForm,
    setFormData,
  };
};
