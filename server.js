import express from "express";

const app = express();

//Set static folder
app.use(express.static("public"));
//parse url-encoded bodies as sent by html forms
app.use(express.urlencoded({ extended: true }));
//parse json bodies as sent by api clients
app.use(express.json());

//handle GET - Users
app.get("/users", async (req, res) => {
  //   const users = [
  //     { id: 1, name: "Jimmy Dean" },
  //     { id: 2, name: "Bertha Jones" },
  //     { id: 3, name: "Rusty Slim" },
  //   ];
  const limit = +req.query.limit || 10;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users?_limit=${limit}`
  );
  const users = await response.json();

  res.send(`
        <h1 class="text-2xl font-bond my-4">Users</h1>
        <ul>
        ${users.map((user) => `<li>${user.name}</li>`).join("")}</ul>
        `);
});

//start server
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
