const PORT = 8000;
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const axios = require("axios");
const db = require("./connection");

const app = express();
app.use(cors());
app.use(express.json());

const url = "http://localhost:3000/ticket";

app.post("/tickets", async (req, res) => {
  const formData = req.body.formData;
  const options = {
    method: "POST",
    headers: {
      Accepts: "application/json",
      // "X-Cassandra-Token": token,
      "Content-Type": "application/json",
    },
    data: formData,
  };

  try {
    const response = await axios(url, options);
    res.status(200).json(response.data);
  } catch (err) {
    console.log(
      `I got it bad and it aint no goooooooood... Skeepp-ppee-bop-bi-dup-pi-popp-poah-boah: ${err}`
    );
    res.status(500).json({ message: err });
  }
});

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
