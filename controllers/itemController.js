const ItemModel = require ("../models/ItemModel");

 const getItemController = async (req, res) => {
  try {
    const items = await ItemModel.find();
    res.status(200).send(items);
  } catch (error) {
    console.log(error);
  }
};

const addItemController = async (req, res) => {
    try {
      const newItem = new ItemModel(req.body);
      await newItem.save();
      res.status(201).send("Item Created Successfully");
    } catch (error) {
      res.status(400).send("Error: " + error.message);
      console.log(error);
    }
  };
  const editItemController = async (req, res) => {
    try {
      const { itemId } = req.body;
      console.log(itemId);
      await ItemModel.findOneAndUpdate({ _id: itemId }, req.body, {
        new: true,
      });
  
      res.status(201).json("item Updated");
    } catch (error) {
      res.status(400).send(error);
      console.log(error);
    }
  };
  const deleteItemController = async (req, res) => {
    try {
      const {itemId} = req.body;
      await ItemModel.findOneAndDelete({ _id: itemId });
  
      res.status(201).json("item Deleted");
    } catch (error) {
      res.status(400).send(error);
      console.log(error);
    }
  };

  
  
module.exports= {getItemController, addItemController,  editItemController, deleteItemController};