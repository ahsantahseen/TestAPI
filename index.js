const express = require("express");
const app = express();

const PORT = 4000;

app.get("/", (req, res) => {
  res
    .send({
      message: `HE`,
    })
    .status(200);
});

try {
  app.listen(PORT, "192.168.18.67", () => {
    console.log("App is Listening on PORT: ", PORT);
  });
} catch (error) {
  console.log(error);
}
