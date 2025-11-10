// minhaAPI/app.js
const express = require('express');
const usuarioRouter = require('./routes/professor');
const professorRouter = require('./routes/professor'); 

const app = express();
const port = 3000;

app.use(express.json());

// rotas principais
app.use('/usuario', usuarioRouter);
app.use('/professores', professorRouter); 

// rota raiz
app.get('/', (req, res) => {
    res.json({ mensagem: 'API ativa! Bem-vindo à aplicação da AC2.' });
});

// exemplo de rota com query string
app.get('/ola', (req, res) => {
    const nome = req.query.nome || 'visitante';
    res.json({ mensagem: `Olá, ${nome}!` });
});

// exemplo com parâmetro de rota
app.get('/calcular-dobro/:numero', (req, res) => {
    const numero = parseFloat(req.params.numero);
    const dobro = numero * 2;
    res.json({ numero: numero, dobro: dobro });
});

// exemplo de rota POST
app.post('/somar', (req, res) => {
    const { num1, num2 } = req.body;
    const soma = num1 + num2;
    res.json({ num1, num2, soma });
});

// servidor
app.listen(port, () => {
    console.log(`Servidor executando em http://localhost:${port}`);
});
