const User = require("../models/User")// fih schema 
const router = require("express").Router();// hdhe bch taayt ll express.rout "li yhezek mn api l api"

// register
router.post("/register", async (req, res) => {//req: li bch dkhlo nty ----res: l bch yrjaalk 
 console.log("im here")
  const newUser = new User({
    username: req.body.username, //aaaa f req.body w ytsabo fl username
    email: req.body.email, //mota mail
    password: req.body.password, //123456
  });
  try {
    const savedUser = await newUser.save(); //stanani lin nsajel baad rjaali rslt
    res.status(201).json(savedUser); // kn cv taada
  } catch (err) {
    res.status(500).json(err); // hdhy kn fama ereuer maanaha rajaali chnwa hwa l err mtaai
  }
});
// login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    });
    !user && res.status(401).json("Wrong User Name");
    const password = user.password;
    console.log(req.body.password+" and "+req.body.username+" and pass from db = "+user.username)

    password !== req.body.password && res.status(401).json("Wrong Password");
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
