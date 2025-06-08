const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
const express = require("express");

const connectDB = require("./config/db.js");

const helloRouter = require("./routes/hello.js");
const entriesRouter = require("./routes/entries.js");

dotenv.config();
const app = express();

console.log("Node env", process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") {
  app.use(cors());
  console.log("cors enabled");
}
app.use(express.json());
connectDB();

app.use("/api/hello", helloRouter);
app.use("/api/entries", entriesRouter);

if (process.env.NODE_ENV === "production") {
  const clientBuildPath = path.join(__dirname, "../../client/build");
  app.use(express.static(clientBuildPath));

  app.get("*splat", (req, res) => {
    res.sendFile(path.resolve(clientBuildPath, "index.html"));
  });
}

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
