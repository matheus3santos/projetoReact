 //Requirin module
const { response } = require('express');
const express = require('express');

//Creating express object
const app = express();

//Handling Get request

app.get('/',(req,res)=>{
    res.send('O get está funcionando')
    res.end()
})

//Put

app.put('/',(req,res)=>{
    res.send('O put também esta funcionando')
    res.end()
})

//Post

app.post('/',(req,res)=>{
    res.send('O post está funcioando!!!!!')
    res.end()

})

//Delete

app.delete('/',(req,res)=>{
    res.send('O delete funciona !!!')
    res.end()
})


//Port number
const PORT = process.env.PORT || 5000;

//Server setup

app.listen(PORT,console.log('Server started on port ${5000}'));
