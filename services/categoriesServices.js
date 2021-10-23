const { Category } = require('../models');

const NAME_IS_REQUIRED = {
  error: {
    status: 400,
    message: '"name" is required',
  },
};

const createCategory = async (categoryData) => {
  const { name } = categoryData;
  if (!name) return NAME_IS_REQUIRED;

  const newCategory = await Category.create(categoryData);

  return { ...newCategory.dataValues };
};

const getAllCategories = async () => {
  const categories = await Category.findAll();

  return categories;
};

module.exports = {
  createCategory,
  getAllCategories,
};