import { doGet, doPost ,doPut } from "../utils/request";

export const imageUrl = (imagePath) => {
  return `http://50.28.104.48:3003/images/${imagePath}`;
};

export const getWho_teli_digi_bySlug = async (data) => {
  return await doPost("api/WhoTeliDigi/getWho_teli_digiBySlug", data);
};

export const getMsgMissionSusBySlug = async (data) => {
  return await doPost("api/msgMissionSus/getMsgMissionSusBySlug", data);
};

export const getSustainabilityByCategory = async (data) => {
  return await doPost("api/sustainability/getSustainabilityByCategory", data);
};

export const getCorporate = async () => {
  return await doGet("api/corporate/getCorporate")
 }

export const getAllNews = async () => {
  return await doGet("api/news/getAllNews")
 }

export const getAllNewsCategory = async () => {
  return await doGet("api/news/getAllNewsCategory")
 }
 export const getRecruitmentByCategory = async (data) => {
  return await doPost("api/recruitment/getRecruitmentByCategory", data)
 }
 export const getNewsByCategory = async (data) => {
  return await doPost("api/news/getNewsByCategory", data)
 }

 export const getNewsBySlug = async (data) => {
  return await doPost("api/news/getNewsBySlug", data)
 }

 export const getAllRecruitmentCategory = async () => {
  return await doGet("api/recruitment/getAllRecruitmentCategory")
 }

 export const getAllRecruitment = async () => {
  return await doGet("api/recruitment/getAllRecruitment")
 }

 export const getAllMultitelPride = async () => {
  return await doGet("api/multitelPride/getAllMultitelPride")
 }


 
 export const getTelecommunicationMenusBySlug = async (data) => {
  return await doPost("api/telecommunication/getTelecommunicationMenusBySlug",data)
 }

 
 export const getTelecommunicationBySlug = async (data) => {
  return await doPost("api/telecommunication/getTelecommunicationBySlug",data)
 }

