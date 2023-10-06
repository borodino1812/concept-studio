const PORT = 8000;
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./connection");

const app = express();
app.use(cors());
app.use(express.json());

const url = "http://192.168.56.1:3000/ticket";

app.get("/tickets", (req, res) => {
  try {
    const formData = db.query("SELECT * FROM posts;", (err, result, fields) => {
      if (err) throw err;
      result.forEach((res) => {
        console.log(res.title);
      });
      console.log("The solution is good ");
      // db.end();
      // function getCircularReplacer() {
      //   const seen = new WeakSet();
      //   return (key, value) => {
      //     if (typeof value === "object" && value !== null) {
      //       if (seen.has(value)) {
      //         return;
      //       }
      //       seen.add(value);
      //     }
      //     return value;
      //   };
      // }
      // const replaced = JSON.stringify(result, getCircularReplacer());
      res.status(200).send(result);
    });
  } catch (err) {
    console.log(err);
  }
});

app.post("/tickets", async (req, res) => {
  try {
    const formData = req.body.formData;
    db.query(
      `INSERT INTO posts(
        title, 
        \`desc\`, 
        category, 
        preview
        ) 
        VALUES (
          '${formData.title}', 
          '${formData.desc}', 
          '${formData.category}',
          '${formData.preview}'
          );`
    );

    console.log("Post query is completed");
    res.status(200).json({ data: formData });
    // db.end();
  } catch (err) {
    console.log(err);
  }
});

app.delete("/tickets/:documentId", async (req, res) => {
  const id = req.params.documentId;

  const options = {
    method: "DELETE",
    headers: {
      Accepts: "application/json",
    },
  };

  try {
    const response = "RESPONSE";
    res.status(200).send(response);
  } catch (error) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
