const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

const caixaSchema = new mongoose.Schema({
  resp: { type: String, required: true },
  email: { type: String, required: true }
});

const Caixa = mongoose.model('Caixa', caixaSchema);

app.post('/api/caixa', async (req, res) => {
  const { resp, email } = req.body;

  try {
    const newCaixa = new Caixa({ resp, email });
    await newCaixa.save();
    res.json({ message: 'Documento inserido com sucesso.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao inserir documento.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
});
