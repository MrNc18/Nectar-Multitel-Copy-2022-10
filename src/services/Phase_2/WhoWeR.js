import { doGet, doPost, doPut,doDelete }  from "../../utils/request"

 export const imageUrl =  (imagePath)  => {
    return (`http://50.28.104.48:3003/images/${imagePath}`)
 }

export const getAllMsgMissionSus = async () => {
   return await doGet("api/msgMissionSus/getAllMsgMissionSus")
  }
  export const getAddMsgMissionSus= async(data) =>{
    return await doPost('api/msgMissionSus/addMsgMissionSus',data);
  }
  export const getEditMsgMissionSus = async(data) =>{
    return await doPut('api/msgMissionSus/editMsgMissionSus',data);
  }
  export const getDeleteMsgMissionSus = async(data) =>{
    return await doDelete('api/msgMissionSus/deleteMsgMissionSus',data);
  }

  //Sustainability Categories

  export const getAllSusCategories = async () => {
    return await doGet("api/sustainability/getAllSustainabilityCategory")
   }
   export const getAddSusCategories = async(data) =>{
     return await doPost('api/sustainability/addSustainabilityCategory',data);
   }
   export const getEditSusCategories= async(data) =>{
     return await doPut('api/sustainability/editSustainabilityCategory',data);
   }
   export const getDeleteSusCategories= async(data) =>{
     return await doDelete('api/sustainability/deleteSustainabilityCategory',data);
   }

   //Sustainabaility  data Management

   export const getAllSus = async () => {
    return await doGet("api/sustainability/getSustainability")
   }
   export const getAllSusBySlug = async (data) => {
    return await doPost("api/sustainability/getSustainabilityBySlug",data)
   }
   export const getAllSusByCat = async (data) => {
    return await doPost("api/sustainability/getSustainabilityByCategory",data)
   }

   export const getAddSus = async(data) =>{
     return await doPost('api/sustainability/addSustainability',data);
   }
   export const getEditSus = async(data) =>{
     return await doPut('api/sustainability/editSustainability',data);
   }
   export const getDeleteSus = async(data) =>{
     return await doDelete('api/sustainability/deleteSustainability',data);
   }

  //  multiPride Apis

  export const getAllMultiPride = async () => {
    return await doGet("api/multitelPride/getAllMultitelPride")
   }
   export const getAlMultiPrideBySlug = async (data) => {
    return await doPost("api/multitelPride/getMultitelPrideBySlug",data)
   }
   export const getAlMultiPrideById= async (data) => {
    return await doPost("api/multitelPride/getMultitelPrideById",data)
   }
  
   export const getAddMultiPride = async(data) =>{
     return await doPost('api/multitelPride/addMultitelPride',data);
   }
   export const getEditMultipride = async(data) =>{
     return await doPut('api/multitelPride/editMultitelPride',data);
   }
   export const getDeleteMultipride = async(data) =>{
     return await doDelete('api/multitelPride/deleteMultitelPride',data);
   }


   
  //Recruitment Categories

  export const getAllRecCategories = async () => {
    return await doGet("api/recruitment/getAllRecruitmentCategory")
   }
   export const getAddRecCategories = async(data) =>{
     return await doPost('api/recruitment/addRecruitmentCategory',data);
   }
   export const getEditRecCategories= async(data) =>{
     return await doPut('api/recruitment/editRecritmentCategory',data);
   }
   export const getDeleteRecCategories= async(data) =>{
     return await doDelete('api/recruitment/deleteRecruitmentCategory',data);
   }

   //recuitment data Management

   export const getAllRec = async () => {
    return await doGet("api/recruitment/getAllRecruitment")
   }
   export const getAllRecBySlug = async (data) => {
    return await doPost("api/recruitment/getRecruitmentBySlug",data)
   }
   export const getAllRecByCat = async (data) => {
    return await doPost("api/recruitment/getRecruitmentByCategory",data)
   }

   export const getAddRec = async(data) =>{
     return await doPost('api/recruitment/addRecruitment',data);
   }
   export const getEditRec = async(data) =>{
     return await doPut('api/recruitment/editRecruitment',data);
   }
   export const getDeleteRec = async(data) =>{
     return await doDelete('api/recruitment/deleteRecruitment',data);
   }
   export const jobApply = async(data) =>{
    return await doPost('api/recruitment/fillRecruitmentForm',data);
  }

    //News Categories

  export const getAllNewsCategories = async () => {
    return await doGet("api/news/getAllNewsCategory")
   }
   export const getAddNewsCategories = async(data) =>{
     return await doPost('api/news/addNewsCategory',data);
   }
   export const getEditNewsCategories= async(data) =>{
     return await doPut('api/news/editNewsCategory',data);
   }
   export const getDeleteNewsCategories= async(data) =>{
     return await doDelete('api/news/deleteNewsCategory',data);
   }

   //News data Management

   export const getAllNews = async () => {
    return await doGet("api/news/getAllNews")
   }
   export const getAllNewsBySlug = async (data) => {
    return await doPost("api/news/getNewsBySlug",data)
   }
   export const getAllNewsByCat = async (data) => {
    return await doPost("api/news/getNewsByCategory",data)
   }

   export const getAddNews = async(data) =>{
     return await doPost('api/news/addNews',data);
   }
   export const getEditNews = async(data) =>{
     return await doPut('api/news/editNews',data);
   }
   export const getDeleteNews = async(data) =>{
     return await doDelete('api/news/deleteNews',data);
   }

      //corporate Categories

  export const getAllCorCategories = async () => {
    return await doGet("api/corporate/getAllCorporateCategory")
   }
   export const getAddCorCategories = async(data) =>{
     return await doPost('api/corporate/addCorporateCategory',data);
   }
   export const getEditCorCategories= async(data) =>{
     return await doPut('api/corporate/editCorporateCategory',data);
   }
   export const getDeleteCorCategories= async(data) =>{
     return await doDelete('api/corporate/deleteCorporateCategory',data);
   }

   //Corporate data Management

   export const getAllCor = async () => {
    return await doGet("api/corporate/getCorporate")
   }
   export const getAllCorBySlug = async (data) => {
    return await doPost("api/corporate/getCorporateBySlug",data)
   }
   export const getAllCorByCat = async (data) => {
    return await doPost("api/corporate/getCorporateByCategory",data)
   }

   export const getAddCor = async(data) =>{
     return await doPost('api/corporate/addCorporate',data);
   }
   export const getEditCor = async(data) =>{
     return await doPut('api/corporate/editCorporate',data);
   }
   export const getDeleteCor = async(data) =>{
     return await doDelete('api/corporate/deleteCorporate',data);
   }