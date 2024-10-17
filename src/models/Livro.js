import mongoose from 'mongoose';

const livroSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: [true, 'Campo obrigatório.'] },
    editora: { type: String, required: [true, 'Campo obrigatório.'] },
    preco: { type: Number, required: [true, 'Campo obrigatório.'] },
    paginas: { type: Number, required: [true, 'Campo obrigatório.'] },
    autor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'autores',
      required: [true, 'Campo obrigatório.'],
    },
  },
  { versionKey: false }
);

const livro = mongoose.model('livros', livroSchema);

export default livro;
