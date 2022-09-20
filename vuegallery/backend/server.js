const express = require('express')
const app = express()
const port = 3000
const database = require("./database");
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/api/items', async (req, res) => {
  const result = await database.run("SELECT * FROM items");
  res.send(result);
})

app.post('/api/account/login', async (req, res) => {
  const loginId = req.body.email;
  const loginPw = req.body.password;

  const result = await database.run(`SELECT id FROM members WHERE email = "${loginId}" AND PASSWORD = "${loginPw}"`);
  res.send(result);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})