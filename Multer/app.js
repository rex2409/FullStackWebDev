const path = require('path');
const express = require("express");
const multer = require('multer');
const cloudinary = require('cloudinary').v2
const DatauriParser = require('datauri/parser');
const parser = new DatauriParser();
const PORT = 4444;

const app = express();

          
cloudinary.config({ 
  cloud_name: '', 
  api_key: '', 
  api_secret: '' 
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'images')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname);
    }
  })

  function fileFilter (req, file, cb) {

    // The function should call `cb` with a boolean
    // to indicate if the file should be accepted
  
    if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/svg'){
        cb(null,true)
    }
    else{
        // To reject this file pass `false`, like so:
        cb(null, false)
    }

    // To accept the file pass `true`, like so:
    // cb(null, true)
  
    // You can always pass an error if something goes wrong:
    // cb(new Error('I don\'t have a clue!'))
  
  }

app.set('view engine','hbs');
app.use(express.urlencoded({extended:true}));
// app.use(multer({dest: 'images'}).single('image'));
// app.use(multer({storage, fileFilter}).single('image'));
app.use(multer({}).single('image'));
// app.use(express.static(path.join(__dirname,'public')));



app.get('/',(req,res)=>{
    res.render("index");
})

app.post('/',(req,res)=>{
    const {title,description} = req.body;
    console.log(title, description);
    // console.log(req.file);
    const ext = path.extname(req.file.originalname);
    const fileUri = parser.format(ext, req.file.buffer);
    // cloudinary.uploader.upload(`${req.file.path}`, (error, result)=>{
    cloudinary.uploader.upload(`${fileUri.content}`, (error, result)=>{
        console.log(result, error);
      });
    res.send('OK')
})

app.listen(PORT,()=>{
    console.log(`http://localhost:` + PORT);
});
