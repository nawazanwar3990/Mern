const express = require("express");
const app = express();
var cors = require('cors');

app.use(cors());
// parse requests of content-type - application/json
app.use(express.json({
  inflate: true,
  limit: '100kb',
  reviver: null,
  strict: true,
  type: 'application/json',
  verify: undefined
}));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const database = require("./models");

database.connection
  .connect('mongodb://localhost:27017/mern', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  })

app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./routes/user")(app);
require("./routes/auth")(app);
require("./routes/post")(app);
require("./routes/product")(app);
require("./routes/role")(app);
require("./routes/permission")(app);
require("./routes/category")(app);
require("./routes/comment")(app);
require("./routes/expense")(app);
require("./routes/income")(app);
require("./routes/vendor")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});