const express = require('express')
const app = express()
const port = 7000;
const path = require("path")

// Tích hợp pug cho dự án
app.set('views', path.join(__dirname, "views"))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index',{
    pageTitle: "Trang chủ"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})