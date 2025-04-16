const app = require('./config/express')();
const port = app.get('port');

app.use(cors(
    {
        "origin": "*",
        "methods": "GET,PUT,POST,DELETE",
    }
))

app.listen(port, () => {
    console.log(`Servidor está rodando na porta ${port}`);
});