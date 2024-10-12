import mongoose from 'mongoose';

const livroSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: [true, 'obrigatorio'] },
    editora: { type: String, required: [true, 'obrigatorio'] },
    preco: { type: Number, required: [true, 'obrigatorio'] },
    paginas: { type: Number, required: [true, 'obrigatorio'] },
  },
  { versionKey: false }
);

const livro = mongoose.model('livros', livroSchema);

export default livro;
