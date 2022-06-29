import { doGet, doPost } from "../utils/request";

export const imageUrl = (imagePath) => {
  return `http://50.28.104.48:3003/images/${imagePath}`;
};

export const getMsgMissionSusBySlug = async (data) => {
  return await doPost("api/msgMissionSus/getMsgMissionSusBySlug", data);
};

export const getSustainabilityByCategory = async (data) => {
  return await doPost("api/sustainability/getSustainabilityByCategory", data);
};

export const getAllNews = async () => {
  return await doGet("api/news/getAllNews")
 }

export const getAllNewsCategory = async () => {
  return await doGet("api/news/getAllNewsCategory")
 }

 export const getNewsByCategory = async (data) => {
  return await doPost("api/news/getNewsByCategory", data)
 }

 export const getAllRecruitmentCategory = async () => {
  return await doGet("api/recruitment/getAllRecruitmentCategory")
 }

 export const getRecruitmentByCategory = async (data) => {
  return await doPost("api/recruitment/getRecruitmentByCategory", data)
 }

 export const getAllRecruitment = async () => {
  return await doGet("api/recruitment/getAllRecruitment")
 }
 export const getCorporate = async () => {
  return await doGet("api/corporate/getCorporate")

 
 }

