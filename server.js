const express = require("express");
const app = express();

app.post("/", (req, res) => {
  return res.status(200).json({
    msg: "it does wrk finally",
  });
});
app.get("/", (req, res) => {
  return res.status(200).json({
    msg: "it does wrk finally",
  });
});

app.listen(5001, () => {
  console.log("It fakin works");
});
