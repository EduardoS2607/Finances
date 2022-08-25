const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.static(__dirname + '/dist/financas-pessoais/'))

app.get('/*', (req, res) =>{
    res.sendFile(__dirname + '/dist/financas-pessoais/index.html')

})

app.listen(PORT, () =>{
    console.log('Servidor iniciado na porta' + PORT);
})