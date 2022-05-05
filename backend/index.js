const express = require("express");
const app = express();
const port = 8080;
const ImagesRouter = require("./routes/Image");
const UserRouter = require("./routes/User");
const ReactionRouter = require("./routes/Reaction");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.post("/post", (req, res) =>{ //test de connexion backend/frontend
  console.log("connected to React");
  res.redirect("/"); // redirige vers la racine du site 
})

app.use("/Image", ImagesRouter);

app.use("/User", UserRouter);

app.use("/Reaction", ReactionRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});