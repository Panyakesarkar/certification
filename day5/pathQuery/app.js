
const express= require('express');
const app = express();


// app.get('/dog',(req,res)=>{
//     res.send('<h1> DOG </h1>');

// })
// app.get('/cat',(req,res)=>{
//     res.send('<h1> CAT </h1>');

// })
// app.get('/monkey',(req,res)=>{
//     res.send('<h1> MONKEY </h1>')
// })


app.get('/animal/:anything',(req,res)=>{
    console.log(req.params);
    console.log(req.params.anything);
    const {anything}= req.params;
    res.send(`<h1> I'M ${anything} </h1>`)
    
    
})

app.get('/search',(req,res)=>{
    console.log(req.query);
    console.log(req.query.name);
    const {name}= req.query;
    res.send(`<h1> My Query is ${name} </h1>`)
})

app.listen(8080,()=>{
    console.log('server is running at port 8080');
    
});

