import express from 'express';
const app = express()

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
function buscarUsuariosPorId(username) {
    return usuarios.filter(usuarios => usuarios.username == username)
}

app.get('/login', (req, res) => {
    if (usuarios.username === 'rafael@finance.com') {
        res.status(200).send('Deu certo')
    }
    res.status(404).send('Deu errado')
})

app.get('/login/:username', (req, res) => {
    //let index = req.params.id
    res.json(buscarUsuariosPorId(req.params.username))
})

export default app
