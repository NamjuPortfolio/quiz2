const express = require('express');
const path = require('path');
const app = express();

app.listen(5000, function(){
  console.log("서버 정상 열림 5000")
})
app.use(express.static(path.join(__dirname, 'quiz/dist')));
app.get('/', function(req,res){
  res.sendFile(path.join(__dirname,'quiz/dist/index.html'))
})
// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/index.html');
//   // sendFile - 파일을 보낼 수 있는 함수
//   // __dirname - 현재 파일의 경로
// })
// app.get('/about', function(req,res){
//   res.sendFile(__dirname + '/about.html');
// })
// app.get('/about/list', function(req,res){
//   res.sendFile(__dirname + '/aboutlist.html');
// })

app.get('*', function(req,res){
  res.sendFile(path.join(__dirname,'quiz/dist/index.html'))
})

module.exports = app;
