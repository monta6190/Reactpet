//decalatiobn des ouitile les bch nkhdem bihom
const dotenv = require("dotenv");//t3ayet baha ll config lkhasa bik bch mch aya whed ychoufha 
const express = require("express");//hdhe nhko bih maa node naatyw bih awamer 
const app = express();//
const mongoose = require("mongoose");//base de donné mtaaek 
const cors = require("cors");//ykhli aya whed tbathlo l app ynjm ystaamlha 
const userRoute = require("./routes/user");
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoute);

app.listen(process.env.PORT, () => {
  console.log("Backend server is running! 5000");
});