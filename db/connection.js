const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://user2:user2@cluster0.xiftkab.mongodb.net/SecondDB?retryWrites=true&w=majority";
const mongoose = require("mongoose");

mongoose
  .connect(uri, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("MongoDB Connected…");
  })
  .catch((err) => {
    console.log(err);
    console.log("err.reason.servers", err.reason.servers);
  });
