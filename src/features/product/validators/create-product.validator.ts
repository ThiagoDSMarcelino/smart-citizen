import { Schema } from "express-validator";

export const createProductSchema: Schema = {
  name: {
    in: ["body"],
    isString: {
      errorMessage: "O nome deve ser uma string",
    },
    notEmpty: {
      errorMessage: "O nome é obrigatório",
    },
    trim: true,
  },
  description: {
    in: ["body"],
    isString: true,
    optional: true,
  },
  price: {
    in: ["body"],
    isFloat: {
      options: { min: 0 },
      errorMessage: "O preço deve ser um número positivo",
    },
    notEmpty: {
      errorMessage: "O preço é obrigatório",
    },
    toFloat: true,
  },
  category: {
    in: ["body"],
    isString: { errorMessage: "Categoria deve ser texto" },
    notEmpty: { errorMessage: "Categoria é obrigatória" },
  },
  stock: {
    in: ["body"],
    isInt: {
      options: { min: 0 },
      errorMessage: "O estoque deve ser um inteiro positivo",
    },
    toInt: true,
  },
  discount: {
    in: ["body"],
    isFloat: {
      options: { min: 0, max: 100 },
      errorMessage: "O desconto deve ser entre 0 e 100",
    },
    optional: true,
    toFloat: true,
  },
};
