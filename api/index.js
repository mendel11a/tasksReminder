const express = require("express");
const path=require("path")
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const tasks = require("./routes/tasks");
const PORT= process.env.PORT || 8800;

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });

app.use(express.json()); //to accept json files as default
app.use("/", tasks);
app.use(express.static(path.join(__dirname, "/frontend/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/frontend/build', 'index.html'));
});
app.listen(PORT, () => {
  console.log("Backend server is running!");
});
