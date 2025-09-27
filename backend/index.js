const port = process.env.PORT || 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { type } = require("os");
const { sign } = require("crypto");
const { emitWarning, connected } = require("process");
const { error } = require("console");

app.use(express.json());
app.use(cors());

// Database connection with MongoDB Atlas

mongoose.connect("mongodb+srv://koteswar31204_db_user:koti2004@cluster0.fmmlmjl.mongodb.net/ecommerce")

//  API creation

app.get("/", (req, res) => {
  res.send("Express App is Running")
})

// Image storage engine

const storage = multer.diskStorage({
  destination: './upload/images',
  filename: (req, file, cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
})

const upload = multer({ storage: storage })

// creating upload endpoint for images

app.use('/images', express.static('upload/images'))
app.post("/upload", upload.single('product'), (req,res) => {
  res.json({
    success: true,
    image_url: `https://e-commerce-app-backend-31uv.onrender.com/images/${req.file.filename}`
  })
})

//schema for creatig products

const Product=mongoose.model("Product",{
  id:{
    type:Number,
    required:true,
  },
  name:{
    type:String,
    required:true,
  },
  image:{
    type:String,
    required:true,
  },
  category:{
    type:String,
    required:true,
  },
  quality:{
    type:String,
    required:true,
  },
  price:{
    type:Number,
    required:true,
  },
  date:{
    type:Date,
    default:Date.now,
  },
  available:{
    type:Boolean,
    default:true,
  },


})

app.post('/addproduct',async(req,res)=>{
  let products=await Product.find({});
  let id;
  if(products.length>0){
    let last_product_array=products.slice(-1);
    let last_product=   last_product_array[0];
    id=last_product.id+1;

  }
  else{
    id=1;
  }

  const product= new Product({
    id:id,
    name:req.body.name,
    image:req.body.image,
    category:req.body.category,
    quality:req.body.quality,
    price:req.body.price,
  });
  console.log(product);
  await product.save();
  console.log("Saved");
  res.json({
    success:true,
    name:req.body.name,
  })

})

//creating API for deleting products

app.post('/removeproduct',async(req,res)=>{
  await Product.findOneAndDelete({id:req.body.id});
  console.log("Removed");
  res.json({
    success:true,
    name:req.body.name,
})
})

//creating API for gettig all products

app.get('/allproducts',async(req,res)=>{
  let products=await Product.find({});
  console.log("All products fetched");
  res.send(products);

})

//schema creating for user model

const Users=mongoose.model('Users',{
  name:{
    type:String,
  },
  email:{
    type:String,
    unique:true,
  },

  password:{
    type:String
  },
  cartData:{
    type:Object,
  },
  date:{
    type:Date,
    default:Date.now,
  }
})

//Creating endpoint for registering the users

app.post('/signup',async(req,res)=>{

  let check=await Users.findOne({email:req.body.email});
  if(check){
    return res.status(400).json({success:false,errors:"existing user found with same email address"})
  }
  let cart={};
  for (let i=0; i < 300; i++){
    cart[i]=0;
  }
  const user = new Users({
    name:req.body.username,
    email:req.body.email,
    password:req.body.password,
    cartData:cart,
  })
  await user.save();

  const  data={
    user:{
      id:user.id
    }
  }
  const token =jwt.sign(data,'secret_ecom');
  res.json({success:true,token})
})

//Creating endpoint for user login

app.post('/login',async(req,res)=>{
    let user =await Users.findOne({email:req.body.email});
    if(user){
      const passCompare=req.body.password===user.password;
      if(passCompare)
      {
        const data={
          user:{
            id:user.id
          }
        }
        const token =jwt.sign(data,'secret_ecom');
        res.json({success:true,token});
      }
      else{
        res.json({success:false,errors:"Wrong Password"});
      }
    }
    else{
      res.json({success:false,errors:"Wrong Email Id"});
    }
})

//Creating endpoint for popular data

app.get('/popular',async(req,res)=>{
  let products= await Product.find({category: { $in: ["mens","womens"]}})
  let popular= products.slice(0,8);
  console.log("Popular Fetched");
  res.send(popular);
})


// Creatig middleware to fetch user

const fetchUser=async(req,res,next)=>{
  const token=req.header('auth-token');
  if(!token){
    res.status(401).send({errors:"Please authenticate using valid token"})
  }
  else{
    try{
      const data=jwt.verify(token,'secret_ecom');
      req.user=data.user;
      next();

    } catch(error){
    res.status(401).send({errors:"Please authenticate using valid token"})

    }
  }
}



// Creating endpoint for adding products  in cartdata

app.post('/addtocart',fetchUser,async(req,res)=>{
  console.log("Added",req.body.itemId);
  let userData =await Users.findOne({_id:req.user.id});
  userData.cartData[req.body.itemId]+=1;
  await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
  res.send("Added")

})

// Creating endpoint to remove products  from  cartdata

app.post('/removefromcart',fetchUser,async(req,res)=>{
  console.log("removed",req.body.itemId);
    let userData =await Users.findOne({_id:req.user.id});
    if(userData.cartData[req.body.itemId]>0)
    userData.cartData[req.body.itemId] -=1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send("Removed")
})


app.listen(port, (error) => {
  if (!error) {
    console.log(" Server Running on Port " + port)
  } else {
    console.log(" Error: " + error)
  }
}) 
