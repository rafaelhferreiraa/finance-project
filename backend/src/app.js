import express from 'express';
import cors from 'cors';

const app = express()

// habilita o cors
app.use(cors());

// indicar para o express ler body com json
app.use(express.json());

//mock
const usuarios = [
    {
        id: 1,
        name: 'Rafael',
        username: 'rafael@finance.com',
        password: '123456',
        confirmPassword: '123456'
    },
    {
        id: 2,
        name: 'Estela',
        username: 'estela@finance.com',
        password: '654321',
        confirmPassword: '654321'
    },
]

// funções auxiliares
function buscarUsuariosPorUsername(username) {
    return usuarios.filter(user => user.username == username)
}

app.get('/login/:username', (req, res) => {
    //let index = req.params.id
    res.json(buscarUsuariosPorUsername(req.params.username))
})

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // logica de autenticação
    const user = usuarios.find(user => user.username === username);
    //const userPassword = usuarios.find(pw => pw.password === password);

    if (user) {
        if (user.password === password) {
            res.json({ ok: true, message: 'Autenticação bem-sucedida' });
        } else {
            res.json({ ok: false, message: 'Senha incorreta' });
        }
    } else {
        res.json({ ok: false, message: 'Username não encontrado' })
    }
});

export default app
