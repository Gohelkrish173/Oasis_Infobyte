const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Bcrypt = require('bcrypt');
const Registor = require('./Registor');

mongoose.connect("mongodb+srv://GohelKrish173:krish173@cluster0.tj8zjyr.mongodb.net/Registor")
  .then(() => {
    console.log("Registor Database Connected");
    const app = express();
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(cors());

    const CR = (ok, message, dt) => {
      return {
        ok,
        message,
        dt,
      };
    }

// Add to Register
app.post('/Registor', async (req, res, next) => {
  try {
    const { UserName, Password, Email } = req.body;
    const exsistingUserName = await Registor.findOne({ UserName });
    const exsistingEmail = await Registor.findOne({ Email });

    if (exsistingEmail || exsistingUserName) {
      return res.status(409).json(CR(false, 'Email already exists.'));
    }

    const newRegi = new Registor({
      UserName: req.body.UserName,
      Password: req.body.Password,
      Email: req.body.Email
    });

    await newRegi.save();

    res.status(201).json(CR(true, 'User Registor Successfully'));
  }
  catch (e) {
    next(e);
  }
});

app.get('/Data/:id',async (req,res)=>{
  try{
    const data = await Registor.findOne({UserName : req.params.id});
    data.save();
    res.send(data);
  }
  catch(e){
    console.log(e);
  }
})

// check
app.post('/Login', async (req, res, next) => {
  try {
    const { UserName, Password } = req.body;
    const regi = await Registor.findOne({ UserName });

    if (!regi) {
      return res.status(400).json(createResponce(false, 'Invalid credentials'));
    }

    const isMatch = await Bcrypt.compare(Password, regi.Password);
    if (!isMatch) {
      return res.status(400).json(CR(false, 'Invalid credentials'));
    }

    const UName = regi.UserName;

    res.cookie('token', 123 , UserName);
    res.status(200).json(CR(true, 'Login successful', {UName}));
  } catch (e) {
    next(e);
  }
});

app.get('/Logout', async (req, res) => {
  res.clearCookie('token');
  res.send(CR(true,'UserLogout',{x:"xyz"}))
  // res.send('UserLogout successfully');
});

app.listen(5000, () => {
  console.log("Server Started at 5000 port.");
})
  });