import mongoose from 'mongoose';
import { autorSchema } from './Autor.js';

const livroSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: [true, 'obrigatorio'] },
    editora: { type: String, required: [true, 'obrigatorio'] },
    preco: { type: Number, required: [true, 'obrigatorio'] },
    paginas: { type: Number, required: [true, 'obrigatorio'] },
    autor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'autores',
      required: true,
    },
  },
  { versionKey: false }
);

const livro = mongoose.model('livros', livroSchema);

export default livro;
