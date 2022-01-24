require ('dotenv').config;
const express = require('express')
const app = express()

app.use(express.json());

const port = process.env.PORT || 3000;

app.get('/users', (req, res) => {
    const users = [
        {
            id: 1,
            name: 'Mateo'
        },
        {
            id: 2,
            name: 'Marta'
        },
    ]
  res.json(users);
})

app.post('/users', (req, res) => {
    const user = req.body;
    user.id = 12312;
    const result = {
        message: 'user created',
        user
    }
  res.status(201).json(result);
})

app.put('/users/:id', (req, res) => {
    const id =  req.params.id;
    const user = req.body;
    user.id = id;
    const result = {
        message: 'user updated',
        user
    }
  res.status(200).json(result);
})

app.patch('/users/:id', (req, res) => {
    const id =  req.params.id;
    const user = req.body;
    user.id = id;
    const result = {
        message: 'user updated w/ patch',
        user
    }
  res.json(result);
})

app.delete('/users/:id', (req, res) => {
    const id=  req.params.id;
    const result = {
        message: `user id:${id} deleted`
    }
  res.json(result);
})

app.listen(port, () => {
    console.log(`app started. port ${port}`);
})