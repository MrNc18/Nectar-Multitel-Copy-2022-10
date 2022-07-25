import { doGet, doPost, doPut } from "../utils/request";

export const imageUrl = (imagePath) => {
  return `http://50.28.104.48:3003/images/${imagePath}`;
};

// GET Methods

export const getAllTelecommnication = async () => {
  return await doGet("api/telecommunication/getAllTelecommnication");
};

export const getAllTelecommnicationMenus = async () => {
  return await doGet("api/telecommunication/getAllTelecommnicationMenus");
};

// POST Methods

export const getTelecommunicationByCategory = async (data) => {
  return await doPost(
    "api/telecommunication/getTelecommunicationByCategory",
    data
  );
};

export const getTelecommunicationMenusBySlug = async (data) => {
  return await doPost(
    "api/telecommunication/getTelecommunicationMenusBySlug",
    data
  );
};

export const getTelecommunicationBySlug = async (data) => {
  return await doPost("api/telecommunication/getTelecommunicationBySlug", data);
};



