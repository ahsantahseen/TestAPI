const express = require("express");
const app = express();

const PORT = 4000;

app.get("/", (req, res) => {
  res
    .send({
      message: `HELLO FROM SERVER RUNNING ON PORT ${PORT}`,
    })
    .status(200);
});

try {
  app.listen(PORT, () => {
    console.log("App is Listening on PORT: ", PORT);
  });
} catch (error) {
  console.log(error);
}
