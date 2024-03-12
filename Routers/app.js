const express = require('express');
const app = express();
const join = require('join');
const PORT = 4444;

app.use(express.urlencoded({extended:true}));

const teachersHandler = require('./routes/teachers');
app.use('/teachers',teachersHandler);

const studentsHandler = require('./routes/students');
app.use('/students',studentsHandler);

app.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
})