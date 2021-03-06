require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const errorHandler = require("./handlers/error");
const PORT = 8081
const authRoutes = require(".routes/authentication");
const messagesRoutes = require("./routes/messages");
const { loginRequired, ensureCorrectUser} = require("./middleware/authentication");

app.use(cors());
app.use(bodyParser.json());
app.use("/api/auth", authRoutes);
app.use("/api/users/:id/messages", loginRequired, ensureCorrectUser, messagesRoutes);

app.get("/api/messages", loginRequired, async function(req, res, next){
  try {
    let messages = await db.Message.find().sort({creatAt: "desc"}).populate("user", {
      username: true,
      profileImageUrl: true
    });
    return res.status(200).json(messages);
  } catch(err){
    return next(err);
  }
});

app.use(function(req, res, next){
  let err = new Error("Error!")
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(PORT, function(){
  console.log(`The Server has been started on ${PORT}`);
});
