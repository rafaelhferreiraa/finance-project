import app from "./src/app.js";

const PORT = 3005

// escutar a porta 3005
app.listen(PORT, () => {
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
});
