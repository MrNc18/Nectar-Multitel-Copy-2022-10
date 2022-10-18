import { doGet, doPost, doPut,doDelete }  from "../../utils/request"

 export const imageUrl =  (imagePath)  => {
    return (`http://10.144.252.88:3003/images/${imagePath}`)
 }

export const getmenuDataBySlug = async (data) => {
   return await doPost("api/WhoTeliDigi/getWho_teli_digiBySlug",data)
  }
  export const getAddmenu = async(data) =>{
    return await doPost('api/WhoTeliDigi/addWho_Teli_digi',data);
  }
  export const getEditMenu = async(data) =>{
    return await doPut('api/WhoTeliDigi/editWho_teli_digi',data);
  }
  export const getDeleteMenu = async(data) =>{
    return await doDelete('api/WhoTeliDigi/deleteWho_teli_digi',data);
  }

    export  const getAllWho_Teli_digi = async () => {
    return await doGet("api/WhoTeliDigi/getAllWho_Teli_digi");
   }
   

 
  
