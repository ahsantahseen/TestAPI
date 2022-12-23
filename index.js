const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000;
const SERVER = process.env.SERVER;

app.use("/", (req, res) => {
  res
    .send({
      message: `HELLO FROM SERVER ${SERVER} RUNNING ON PORT ${PORT}`,
    })
    .status(200);
});

app.listen(() => {
  console.log("App is Listening on PORT: ", PORT);
}, PORT);
