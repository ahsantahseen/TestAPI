const express = require("express");
const app = express();

const PORT = 4400;

app.get("/", (req, res) => {
  res
    .send({
      message: `HELLO FROM SERVER RUNNING ON PORT ${PORT}`,
    })
    .status(200);
});

try {
  app.listen(PORT, "0.0.0.0", () => {
    console.log("App is Listening on PORT: ", PORT);
  });
} catch (error) {
  console.log(error);
}
