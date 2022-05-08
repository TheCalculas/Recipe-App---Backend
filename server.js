const express = require("express");
const app = express();
// const bodyParser = require("body-parser");
require("./database");
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use("/api/auth", require("./Routes/userRoute"));

app.listen(5000, () => {
  console.log("listening on port 5000");
});
