const express = require('express');

const app = express();

let visitas = 0


// Endpoints o servicios
app.get('/', (req, res) => {
    res.send('Hola mundo</h1>')
    // res.send('<h1 style="color:blue;">Hola mundo</h1>')
})


// ejercicio en clase
app.get('/visitas', (req, res) => {
    visitas += 1
    res.send(`La cantidad de visitas es : ${visitas}`)
})

app.get('/fyh', (req, res) => {
    const date = new Date
    res.send(date.toLocaleString())
})



// configuracion del puerto
const server = app.listen(8080, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})

// escuchamos un evento en caso de error
server.on('error', error => console.log(`Error en servidor ${error}`));