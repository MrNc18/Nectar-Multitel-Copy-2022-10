import { doGet, doPost, doPut } from "../utils/request";

export const imageUrl = (imagePath) => {
  return `http://50.28.104.48:3003/images/${imagePath}`;
};

// POST Methods


export const getDigitotalBySlug = async (data) => {
    return await doPost(
      "api/digitotal/getDigitotalBySlug",
      data
    );
  };
  