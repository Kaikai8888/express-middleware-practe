const express = require('express')
const app = express()
const port = 3000
let timeStamp

app.use('/', (req, res, next) => {
  timeStamp = new Date()
  console.log(`${displayTimeStamp(timeStamp)} | ${req.method} from ${req.originalUrl}`)
  next()
})

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})


function displayTimeStamp(timeStamp) {
  return `${timeStamp.getFullYear()}-${timeStamp.getMonth() + 1}-${timeStamp.getDate()} ${timeStamp.getHours()}:${timeStamp.getMinutes()}:${timeStamp.getSeconds()}`
}