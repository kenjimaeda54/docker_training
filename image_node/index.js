const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port,(req,res)=>{
  console.log(`Server rodando na porta ${port}`);
})