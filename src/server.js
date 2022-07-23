const express = require('express');
const app = express(); 
const PORT = 5000;
const repositories = require('./api/v1/index');

app.use(express.json());

app.get("/api/v1/users", (req, res) => {
    res.send(usersFunc());
})

// ユーザー登録
app.post("/api/v1/users", (req, res) => {
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
app.put("/api/v1/users/:id", (req, res) => {
    const user = users.find((user) => {
        return user.id === parseInt(req.params.id)
    })

    user.name = req.body.name
    res.send(user);
})

// ユーザー削除
app.delete("/api/v1/users/:id", (req, res) => {
    users = users.filter((user) => {
        return user.id !== parseInt(req.params.id)
    })

    console.log(users);

    res.send(`ユーザーID ${req.params.id}を削除しました。`);
})


app.listen(PORT, () => {
    console.log('http://localhost:5000/');
})