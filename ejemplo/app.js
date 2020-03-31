var express = require('express')
const services = require('./services')
const handlify = require('./handlers')

const usersHandler = handlify('users')
const postsHandler = handlify('posts')

var app = express()

// parse application/json
app.use(express.json())

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({
    extended: true
}));

app.get('/', usersHandler(services).get)
app.post('/', usersHandler(services).post)
app.put('/', usersHandler(services).put)
app.delete('/', usersHandler(services).delete)

app.get('/', postsHandler(services).get)
app.post('/', postsHandler(services).post)
app.put('/', postsHandler(services).put)
app.delete('/', postsHandler(services).delete)

app.listen(3000, '0.0.0.0', function() {
    console.log('Example app listening on port 3000!')
});