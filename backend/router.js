const router = require("express").Router();
const { items } = require("./bd.js");
const Item = require("./models/item.js");

router.get("/items", (req, res) => {
  Item.find({})
    .then((item) => {
      res.send(item);
    })
    .catch(err => res.send(err));
});

router.post("/items", (req, res) => {
  const { title, img, desc, category, price } = req.body;

  Item.create({ title, img, desc, category, price })
    .then((item) => res.send({ data: item }))
    .catch((err) => res.status(500).send({ message: "Произошла ошибка" }));
});

module.exports = router;
