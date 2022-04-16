import Weather from "../models/weather.js";

export const getWeathers = async (request, response) => {
  try {
    const weather = await Weather.find();
    response.json(weather);
  } catch (error) {
    console.log(error.message);
    response.status(500).json({ error: error.message });
  }
};

export const getWeather = async (request, response) => {
  try {
    const { id } = request.params;
    const weather = await Weather.findById(id);
    if (weather) {
      return response.json(weather);
    }
    response.status(404).json({ message: "Weather not found!" });
  } catch (error) {
    console.log(error.message);
    response.status(500).json({ error: error.message });
  }
};

export const createWeather = async (request, response) => {
  try {
    const weather = new Weather(request.body);
    await weather.save();
    response.status(201).json(weather);
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: error.message });
  }
};

export const updateWeather = async (request, response) => {
  const { id } = request.params;
  const weather = await Weather.findByIdAndUpdate(id, request.body);
  response.status(200).json(weather);
};

export const deleteWeather = async (request, response) => {
  try {
    const { id } = request.params;
    const deleted = await Weather.findByIdAndDelete(id);
    if (deleted) {
      return response.status(200).send("Weather deleted");
    }
    throw new Error("Weather not found");
  } catch (error) {
    console.log(error.message);
    response.status(500).json({ error: error.message });
  }
};
