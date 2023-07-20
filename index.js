const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const sequelize = require('./util/database');
const Products = require('./models/product');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.get('/', (req, res) =>{
    res.send('hello baby');
})

app.post('/add-product', async(req, res)=>{
      
    const name = req.body.name;
    const price = req.body.price;
    
    const data = await Products.create({
        name: name,
        price:price,
    })
    res.status(200).json({allproduct: data});

})

app.get('/get-product', (req, res) => {
    try{
        Products.findAll()
      .then((users) => {
        console.log(users);
        res.status(200).json({ allproducts: users });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
      })
    }
    catch{
          console.log('error');
    }     
  });

  app.delete('/delete-product/:id', async(req, res) =>{
    
    const Id = req.params.id;
    await Products.destroy({where: {id:Id}});
    res.status(200);
  })

sequelize.sync()
.then((result)=>{
  app.listen(8080, ()=>{
    console.log('server is running');
   })
})
.catch((error)=>{
  console.log(error);
})
