import { Schema } from "express-validator";

export const updateProductSchema: Schema = {
  name: {
    in: ["body"],
    optional: true,
    isString: {
      errorMessage: "O nome deve ser uma string",
    },
    notEmpty: {
      errorMessage: "O nome não pode ser vazio se for enviado",
    },
    trim: true,
  },
  description: {
    in: ["body"],
    optional: true,
    isString: {
      errorMessage: "A descrição deve ser texto",
    },
  },
  price: {
    in: ["body"],
    optional: true,
    isFloat: {
      options: { min: 0 },
      errorMessage: "O preço deve ser um número positivo",
    },
    toFloat: true,
  },
  category: {
    in: ["body"],
    optional: true,
    isString: { errorMessage: "Categoria deve ser texto" },
    notEmpty: { errorMessage: "A categoria não pode ser vazia se for enviada" },
    trim: true,
  },
  stock: {
    in: ["body"],
    optional: true,
    isInt: {
      options: { min: 0 },
      errorMessage: "O estoque deve ser um inteiro positivo",
    },
    toInt: true,
  },
  discount: {
    in: ["body"],
    optional: true,
    isFloat: {
      options: { min: 0, max: 100 },
      errorMessage: "O desconto deve ser entre 0 e 100",
    },
    toFloat: true,
  },
};
