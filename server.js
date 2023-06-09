const express = require('express');
const path = require('path');
const app = express();

app.listen(5000, function(){
    console.log("서버 정상 열림/ 포트 5000") // vercel이 기본 제공하는 포트가 5000임
})

app.use(express.static(path.join(__dirname, 'props/dist')));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname, 'props/dist/index.html'))
})
// app.get('/',function(요청,응답){
//     응답.sendFile(__dirname+'/index.html')
//     //sendFile: 파일을 보낼 수 있는 함수.
//     //__dirname : 현재 파일 경로
// })
// 요청은 req, 응답은 res로 많이 쓴다.
// app.get('/about', function(req,res) {
// res.sendFile(__dirname+'/about.html')
// })
// app.get('/about/skill', function(req,res) {
// res.send("스킬 페이지입니다.");
// })
// app.get('/portfolio', function(req,res) {
// res.send("포트폴리오 상세 페이지입니다.");
// })
// app.get('/contact', function(req,res) {
// res.send("컨택트 화면입니다.");
// })

//반드시 맨 밑에 쓰자!
//모든 경로에서 새로고침했을 때 다시 index.html로 보냄
app.get('*',function(req,res) {
    res.sendFile(path.join(__dirname, 'props/dist/index.html'))
})
module.exports = app;