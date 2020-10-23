const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const http = require('http').Server(app);


app.use(express.static(__dirname));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var todos = [
    {todo:'Hi'},
    {todo:'Hello'}
]

app.get('/todos', (req, res) =>{
    console.log(todos);
    res.send(todos);
})

app.post('/backend/addtodo', (req, res) =>{
    console.log(req.body);
    const {todo} = req.body;
    todos.push(req.body);
    res.sendStatus(200);
})

var server = http.listen(5000, () => {
    console.log('listening on ', server.address().port)
});

// app.listen(5000, () => {
//     console.log('listening on 5000')
// })