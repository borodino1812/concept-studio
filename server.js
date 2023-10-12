const PORT = 8000;
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./connection");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/tickets", (req, res) => {
  try {
    const formData = db.query("SELECT * FROM posts;", (err, result, fields) => {
      if (err) throw err;
      result.forEach((res) => {
        console.log(res.title);
      });
      console.log("^ It is a list ^");
      res.status(200).json(result);
    });
  } catch (err) {
    console.log(err);
  }
});

app.get("/tickets/:documentId", (req, res) => {
  const id = req.params.documentId;
  try {
    const formData = db.query(
      `SELECT * FROM posts WHERE id=${id};`,
      (err, result, fields) => {
        if (err) throw err;
        result.forEach((res) => {
          console.log(res.title);
        });
        console.log("^ It is a list of one ^");
        res.status(200).json(result);
      }
    );
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
        preview, 
        status
        ) 
        VALUES (
          '${formData.title}', 
          '${formData.desc}', 
          '${formData.category}',
          '${formData.preview}',
          '${formData.status}'
          );`
    );

    console.log("Post query is completed");
    res.status(200).json({ data: formData });
  } catch (err) {
    console.log(err);
  }
});

app.put("/tickets/:documentId", async (req, res) => {
  const id = req.params.documentId;
  const data = req.body.data;

  try {
    console.log(`The update data is${data}`);
    db.query(
      `UPDATE posts 
      SET 
      title='${data.title}', 
      \`desc\`='${data.desc}', 
      category='${data.category}', 
      preview='${data.preview}',  
      status='${data.status}'
      WHERE id=${id}`
    );
    const response = `Post with id = /${id} has been edited`;
    res.status(200).send(data);
  } catch (error) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});
app.delete("/tickets/:documentId", async (req, res) => {
  const id = req.params.documentId;

  db.query(`DELETE FROM posts WHERE id=${id};`);

  try {
    const response = `Post with id = /${id} has been removed`;
    res.status(200).send(response);
  } catch (error) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
