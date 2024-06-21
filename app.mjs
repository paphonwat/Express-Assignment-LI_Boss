import express from "express";

const app = express();
const port = 4004;

const profileData = {
    data: {
      name: "john",
      age: 20
    }
  };
  app.get("/test", (req, res) => {
    return res.json("Server API is working");
  });

app.get("/profiles", (req, res) => {
    return res.json(profileData);
  });

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
  });