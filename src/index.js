import express from "express";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} 🔥`);
});

app.get("/", (req, res) => {
  res.send({ data: req.body.nosa });
});
