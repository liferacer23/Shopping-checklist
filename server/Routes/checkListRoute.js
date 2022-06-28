const router = require("express").Router();
const CheckList = require("../Models/CheckList");



/* add items to check list */
router.post("/", async (req, res) => {
  const newItem = new CheckList(req.body);
  try {
    const createdItem = await newItem.save();
    res.status(200).json(createdItem);
  } catch (err) {
    res.status(400).json(err);
  }
});
/* get items from check list */
router.get("/", async (req, res) => {
  try {
    const allItems = await CheckList.find();
    res.status(200).json(allItems);
  } catch (err) {
    res.status(500).json(err);
  }
});
/* update items from check list */
router.put("/:id", async (req, res) => {
  try {
    const updatedItem = await CheckList.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateItem);
  } catch (err) {
    res.status(500).json(err);
  }
});
/* delete items from check list */
router.delete("/:id", async (req, res) => {
  try {
    const deleteItem = await CheckList.findByIdAndDelete(req.params.id);
    res.status(200).json(`Item ${deleteItem.Name} has been deleted.`);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;