const express = require('express')
const app = express()
const port = 3000
let requestTime


app.use('/', (req, res, next) => {
  const requestTime = new Date()
  res.on('finish', () => {
    const responseTime = new Date()
    const duration = responseTime - requestTime
    console.log(`${displayTimeStamp(requestTime)} | ${req.method} from ${req.path} | ${duration}ms`)
  })
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
  return `${timeStamp.getFullYear()}-${numberFormat(timeStamp.getMonth() + 1)}-${numberFormat(timeStamp.getDate())} ${numberFormat(timeStamp.getHours())}:${numberFormat(timeStamp.getMinutes())}:${numberFormat(timeStamp.getSeconds())}`
}

function numberFormat(n) {
  return n < 10 ? `0${n}` : `${n}`
}