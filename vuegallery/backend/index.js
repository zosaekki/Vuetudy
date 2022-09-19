const express = require('express')
const app = express()
const port = 3000

const items = ["cho", "hyun", "min"]

app.get('/api/items', (req, res) => {
  res.send(items)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})