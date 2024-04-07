const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser');
const app = express()
const UserModel = require('./models/User')


app.use(express.json())
app.use(cors({
  origin: 'http://localhost:3000',  
  methods: ['GET', 'POST'],       
  credentials: true                 
}));
app.use(cookieParser())


mongoose.connect('mongodb://localhost:27017/Authentication', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


app.post('/register',(req,res)=>{
  const {name, email, password} = req.body;
  bcrypt.hash(password,10)
  .then(hash=>{
    UserModel.create({name, email, password: hash})
    .then(user => res.json("Success"))
    .catch(err => res.json(err))
  }).catch(err => res.json(err))
})


app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    const match = await bcrypt.compare(password, user.password);

    if (match) {
      const token = jwt.sign({ userId: user._id }, "your-secret-key", {
        expiresIn: "1h",
      });

      res.json({ success: "Login successful", token });
    } else {
      return res.status(401).json({ error: "Invalid email or password" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});


app.listen(3001,()=>{
    console.log("server is running")
})



