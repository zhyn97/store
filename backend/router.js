const router = require("express").Router();
const { items } = require("./bd.js");
const Item = require("./models/item.js");

router.get("/items", (req, res) => {
  res.send(items);
});

router.post("/items", (req, res) => {
  const { title } = req.body;

  Item.create({ title })
    .then((item) => res.send({ data: item }))
    .catch((err) => res.status(500).send({ message: "Произошла ошибка" }));
});

module.exports = router;
