const express=require('express')
const app=express()
const path=require('path')
const userModel=require("./model/user")
const bcrypt=require('bcrypt')
const cookieParser = require('cookie-parser')
const jwt=require('jsonwebtoken')

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/signin', (req,res)=>{
  res.sendFile(path.join(__dirname, 'public', 'signin.html'));
})  
app.post('/signin', async(req,res)=>{
  let{name,onlineid,password}=req.body
  let user= await userModel.findOne({onlineid})
    if(user) return res.status(500).send("user already register")

      bcrypt.genSalt(10, (err,salt)=>{
      bcrypt.hash(password, salt, async (err,hash)=>{

   let user= await userModel.create({
    name,
    onlineid,
    password:hash})       
     let token=jwt.sign({onlineid:onlineid, userid:user._id}, 'VDAADFADFADF')
     res.cookie( "token",token)
     res.redirect('/login')
      })
    })
  })
  app.get('/login', (req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
  })
  app.post('/login',  async(req,res)=>{
  let{onlineid,password}=req.body

  let user= await userModel.findOne({onlineid})
if(!user) return res.status(500).send("something went wrong")

    bcrypt.compare(password,user.password, function(err,result){
  if(result) {
    let token=jwt.sign({onlineid:onlineid, userid:user._id}, 'VDAADFADFADF')
       res.cookie("token",token)
      //  res.status(200).redirect("/home") 
  } 
    else res.redirect('/login')
  })
})
app.get('/home', (req,res)=>{
  res.sendFile(path.join(__dirname, 'public', 'home.html'));

})




  app.listen(3000)