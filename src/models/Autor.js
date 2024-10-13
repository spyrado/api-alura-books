import mongoose from 'mongoose';

const autorSchema = mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    nacionalidade: { type: String },
  },
  { versionKey: false }
);

const autores = mongoose.model('autores', autorSchema);

export { autores, autorSchema };
