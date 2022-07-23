const express = require('express');
const app = express(); 
const PORT = 5000;
const userRoute = require('./api/v1/Routes/users');
const taskRoute = require('./api/v1/Routes/tasks');

app.use(express.json());

app.use("/api/v1/users", userRoute);
app.use("/api/v1/tasks", taskRoute);


app.listen(PORT, () => {
    console.log('http://localhost:5000/');
})