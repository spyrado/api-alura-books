import mongoose from 'mongoose';

const livroSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: {
      // Define o tipo do campo, deixa ele obrigatorio e da uma mensagem de erro caso envie fora do padrão.
      type: String,
      required: [true, 'Campo obrigatório.'],
    },
    editora: {
      type: String,
      required: [true, 'Campo obrigatório.'],
      enum: {
        values: ['Casa do Código', 'Branca de Neve'],
        message: 'editora {VALUE} não permitida.',
      },
    }, // Limito as entradas desse campo ao que é colocado no array, algo
    preco: { type: Number, required: [true, 'Campo obrigatório.'] },
    paginas: {
      type: Number,
      min: [
        10,
        'O Número mínimo de páginas é 10, O valor fornecido foi {VALUE}.',
      ], // Define o tipo do campo, deixa ele como minimo de 10 e da uma mensagem de erro caso envie fora do padrão.
      max: [
        5000,
        'O Número máximo de páginas é 5000. O valor fornecido foi {VALUE}',
      ],
      required: [true, 'Campo obrigatório.'],
    },
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
