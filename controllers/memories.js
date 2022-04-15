import Memory from "../models/memory.js"

export const getMemories = async (req, res) => {
  try {
    const memories = await Memory.find();
    res.json(memories);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getMemory = async (req, res) => {
  try {
    const { id } = req.params;
    const memory = await Memory.findById(id);
    if (memory) {
      return res.json(memory);
    }
    res.status(404).json({ message: "Product not found!" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const createMemory = async (req, res) => {
  try {
    const memory = new Memory(req.body);
    await memory.save();
    res.status(201).json(article);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateMemory = async (req, res) => {
  const { id } = req.params;
  const memory = await Memory.findByIdAndUpdate(id, req.body);
  res.status(200).json(memory);
};

export const deleteMemory = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Memory.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Memory deleted");
    }
    throw new Error("Memory not found");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};