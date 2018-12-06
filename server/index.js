const express = require('express')
const bodyParser = require('body-parser')
const mesCont = require('./controllers/messages_controller')

const app = express()

app.use( bodyParser.json())

const port = 3001;

app.post('/api/messages', mesCont.createMessage)

app.get('/api/messages', mesCont.getMessages)

app.put('/api/messages/:id', mesCont.editMessage)

app.delete('/api/messages/:id', mesCont.deleteMessage)

app.listen( port, () => console.log(`Server is watching you through ${port} #OwO#`))