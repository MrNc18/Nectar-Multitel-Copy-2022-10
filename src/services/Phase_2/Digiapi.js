import { doGet, doPost, doPut,doDelete }  from "../../utils/request"

 export const imageUrl =  (imagePath)  => {
    return (`http://50.28.104.48:3003/images/${imagePath}`)
 }

export const getDigiDataBySlug= async (data) => {
   return await doPost("api/digitotal/getDigitotalBySlug",data)
  }

  export const getAddDigi= async (data) => {
    return await doPost("api/digitotal/addDigitotal",data)
   }
  
 
  export const getEditDigiMenu = async(data) =>{
    return await doPut('api/digitotal/editDigitotal',data);
  }
  export const getDeleteDigiMenu = async(data) =>{
    return await doDelete('api/digitotal/deleteDigitotal',data);
  }

    export  const getAllDigiMenu= async () => {
    return await doGet("api/digitotal/getAllDigitotal");
   }
   

 
  
