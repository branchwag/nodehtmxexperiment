import express from "express";

const app = express();

//Set static folder
app.use(express.static("public"));
//parse url-encoded bodies as sent by html forms
app.use(express.urlencoded({ extended: true }));
//parse json bodies as sent by api clients
app.use(express.json());

//start server
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
