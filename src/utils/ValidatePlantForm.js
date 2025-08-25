// src/utils/validators.js

// Validate Plant Form
export const ValidatePlantForm = ({ name, price, categories, image, about }) => {
  const errors = {};

  if (!name) {
    errors.name = "Name is required";
  }

  if (!price || Number(price) <= 0) {
    errors.price = "Price must be a valid positive number";
  }

  if (!categories || categories.length === 0) {
    errors.categories = "Select at least one category";
  }

  if (!image) {
    errors.image = "Image URL is required";
  } else if (!/^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/i.test(image)) {
    errors.image = "Enter a valid image URL (jpg, png, webp, gif)";
  }

  if (!about || about.length < 10) {
    errors.about = "About must be at least 10 characters";
  }

  return errors;
};
export default ValidatePlantForm
