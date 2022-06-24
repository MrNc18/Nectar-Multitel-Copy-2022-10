import { doGet, doPost } from "../utils/request";

export const imageUrl = (imagePath) => {
  return `http://50.28.104.48:3003/images/${imagePath}`;
};

export const getMsgMissionSusBySlug = async (data) => {
  return await doPost("api/msgMissionSus/getMsgMissionSusBySlug", data);
};

export const getAllNews = async () => {
  return await doGet("api/news/getAllNews")
 }

export const getAllNewsCategory = async () => {
  return await doGet("api/news/getAllNewsCategory")
 }

 export const getAllRecruitmentCategory = async () => {
  return await doGet("api/recruitment/getAllRecruitmentCategory")
 }
export const getCorporate = async () => {
  return await doGet("api/corporate/getCorporate")
}
