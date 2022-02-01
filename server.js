const express = require("express");
const app = express();
const https = require("https");
const fs = require("fs");
const path = require("path");
const httpsOptions = {
  cert: fs.readFileSync(path.join(__dirname, "ssl", "host.cert")),
  key: fs.readFileSync(path.join(__dirname, "ssl", "host.key")),
};

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

https.createServer(httpsOptions, app).listen(5001, () => {
  console.log("Yup, server is running");
});
