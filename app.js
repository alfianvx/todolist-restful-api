const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require("./routes");

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`server listening on port : ${PORT}`);
});
