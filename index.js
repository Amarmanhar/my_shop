const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const sequelize = require('./util/database');
const productRouter = require('./router/product');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.get('/', (req, res) =>{
    res.send('hello from server');
})

app.use('/product', productRouter);

app.use('/get', productRouter);

app.use('/delete-product', productRouter);


sequelize.sync()
.then((result)=>{
  app.listen(8080, ()=>{
    console.log('server is running');
   })
})
.catch((error)=>{
  console.log(error);
})

