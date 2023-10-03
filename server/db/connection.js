const mongoose = require("mongoose");

const url =
  "mongodb+srv://chat_app_admin:Manofsteel1@cluster0.b5zlxul.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to db"))
  .catch((e) => console.log("Error", e));
