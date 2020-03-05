const express = require ('express')
const cors = require ('cors')
const bodyParser=require ('body-parser')
const PORT = 3000
const STATUS_CREATED = 201
const STATUS_NO_CREATED = 204
const STATUS_NOT_FOUND = 404
const app = express ()
let todos = [
    {id:1, text: 'learn javaScript', done:true},
    { id:2,text: 'seek for a job', done:false},
    {id:3, text:'forget everything'},
]

    // GET http://localhost:3000/todos
    app.get('/todos', (require, response)=>{
        response.json(todos);
    });
    
    app.listen(PORT, () => console.log('Ok'))
