const express = require("express");
const router = express.Router();
const usersFunc = require("../Data/users");
let users = usersFunc();

// ユーザー一覧取得
router.get("/", (req, res) => {
  res.send(usersFunc());
});

// ユーザー登録
router.post("/", (req, res) => {
  const user = {
    id: users.length + 1,
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
  };

  users.push(user);
  res.send(user);
});

// ユーザー情報更新
router.put("/:id", (req, res) => {
  const user = users.find((user) => {
    return user.id === parseInt(req.params.id);
  });

  user.name = req.body.name;
  res.send(user);
});

// ユーザー削除
router.delete("/:id", (req, res) => {
  users = users.filter((user) => {
    return user.id !== parseInt(req.params.id);
  });

  console.log(users);

  res.send(`ユーザーID ${req.params.id}を削除しました。`);
});

module.exports = router;