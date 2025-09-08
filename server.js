const express = require('express');
const {param} = require('express/lib/application');
const app = express();

app.use(express )

app.get('/', (req,res)=>{
    res.send('Servidor Express...');
});

app.get('/sobre', (req,res)=>{
    res.send('Página Sobre...');
});

app.get('/produtos', (req,res)=>{
    res.send('Página Produtos...');
});

app.get('/api/produtos', (req,res)=>{
    const produtos=[
        {id: 1, nome:"Hello Kitty"},
        {id: 2, nome:"My Melody"},
    ];
    res.json(produtos)
})

app.listen(3000, ()=>{
    console.log('http://localhost:3000');
});
