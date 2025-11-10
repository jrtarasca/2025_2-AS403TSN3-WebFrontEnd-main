
const express = require('express');
const usuarioRouter = require('./routes/professor');
const professorRouter = require('./routes/professor'); 

const app = express();
const port = 3000;

app.use(express.json());


app.use('/usuario', usuarioRouter);
app.use('/professores', professorRouter); 

app.get('/', (req, res) => {
    res.json({ mensagem: 'API ativa! Bem-vindo à aplicação da AC2.' });
});

app.get('/ola', (req, res) => {
    const nome = req.query.nome || 'visitante';
    res.json({ mensagem: `Olá, ${nome}!` });
});


app.get('/calcular-dobro/:numero', (req, res) => {
    const numero = parseFloat(req.params.numero);
    const dobro = numero * 2;
    res.json({ numero: numero, dobro: dobro });
});


app.post('/somar', (req, res) => {
    const { num1, num2 } = req.body;
    const soma = num1 + num2;
    res.json({ num1, num2, soma });
});

app.listen(port, () => {
    console.log(`Servidor executando em http://localhost:${port}`);
});
