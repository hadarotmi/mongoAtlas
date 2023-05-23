const mongoose = require('mongoose');
const {config} =require("../config/secret") 
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(`mongodb+srv://${config.userDB}:${config.passDB}@cluster0.5iwzvis.mongodb.net/express`);
  console.log("mongo connect monkeys24 a")
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}