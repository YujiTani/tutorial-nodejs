const express = require('express');
const app = express(); 
const PORT = 5000;
const usersFunc = require("./Data/users.js");
const users = usersFunc() ;

app.use(express.json());

app.get("/users", (req, res) => {
    res.send(usersFunc());
})

app.post("/users", (req, res) => {
    const user = {
        id: users.length + 1,
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender
    }
    
    users.push(user);
    res.send(user);
})

// ユーザー情報更新
app.put("/users/:id", (req, res) => {
    const user = users.find((user) => {
        return user.id === parseInt(req.params.id)
    })

    console.log(user);

    user.name = req.body.name
    res.send(user);
})

app.listen(PORT, () => {
    console.log('http://localhost:5000/');
})