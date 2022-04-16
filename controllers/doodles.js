import Doodles from "../models/doodles.js";

export const getDoodles = async (request, response) => {
  try {
    const doodles = await Doodles.find();
    response.json(doodles);
  } catch (error) {
    console.log(error.message);
    response.status(500).json({ error: error.message });
  }
};

export const getDoodle = async (request, response) => {
  try {
    const { id } = request.params;
    const doodle = await Doodles.findById(id);
    if (doodle) {
      return response.json(doodle);
    }
    response.status(404).json({ message: "Product not found!" });
  } catch (error) {
    console.log(error.message);
    response.status(500).json({ error: error.message });
  }
};

export const createDoodle = async (request, response) => {
  try {
    const doodle = new Doodles(request.body);
    await doodle.save();
    response.status(201).json(doodle);
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: error.message });
  }
};

export const updateDoodle = async (request, response) => {
  const { id } = request.params;
  const doodle = await Doodles.findByIdAndUpdate(id, request.body);
  response.status(200).json(doodle);
};

export const deleteDoodle = async (request, response) => {
  try {
    const { id } = request.params;
    const deleted = await Doodles.findByIdAndDelete(id);
    if (deleted) {
      return response.status(200).send("Doodle deleted");
    }
    throw new Error("Doodle not found");
  } catch (error) {
    console.log(error.message);
    response.status(500).json({ error: error.message });
  }
};
