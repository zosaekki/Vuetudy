const express = require('express')
const app = express()
const port = 3000
const database = require("./database");
const bodyParser = require('body-parser');

app.get('/api/items', async (req, res) => {
  const result = await database.run("SELECT * FROM items");
  res.send(result);
})

app.post('/api/account/login', async (req, res) => {
  const member = await database.run("SELECT id FROM members")
  res.send(member);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})