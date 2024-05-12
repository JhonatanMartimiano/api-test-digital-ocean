const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Define a porta do servidor

// Rota básica
app.get('/', (req, res) => {
    res.send('Bem-vindo à minha API!');
});

// Rota com parâmetros
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Informações do usuário com o ID ${userId}`);
});

// Rota com método POST
app.post('/user', (req, res) => {
    res.send('Criando um novo usuário');
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
