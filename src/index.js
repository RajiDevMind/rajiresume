import express from "express";
import connectDB from "./connect.js";

const app = express();

app.use(express.json());
app.use(express.static("public"));

// Create user API
app.post("/message", async (req, res) => {
  // CREATE NEW MSG
  const createMsg =
    "INSERT INTO form (`name`,`email`,`message`) VALUES (?, ?, ?)";

  const userDetails = [req.body.name, req.body.email, req.body.message];
  connectDB.query(createMsg, userDetails, (err, data) => {
    if (err) return res.status(500).json(err);
    return res
      .status(200)
      .json(`Thanks ${req.body.name}. Your message was sent successfully!`);
  });
});

const port = 4600;
app.listen(
  port,
  console.log(`Server is listening on port http://localhost:${port} ...`)
);
