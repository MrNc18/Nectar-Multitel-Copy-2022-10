import { doGet, doPost, doPut,doDelete }  from "../../utils/request"

 export const imageUrl =  (imagePath)  => {
    return (`http://50.28.104.48:3003/images/${imagePath}`)
 }

export const getTeleByCat = async (data) => {
   return await doPost("api/telecommunication/getTelecommunicationByCategory",data)
  }
  export const getAddTele = async(data) =>{
    return await doPost('api/telecommunication/addTelecommunication',data);
  }
  export const getEditTele = async(data) =>{
    return await doPut('api/telecommunication/editTelecommunication',data);
  }
  export const getDeleteTele = async(data) =>{
    return await doDelete('api/telecommunication/deleteTelecommunication',data);
  }

  export const getAllTeleMenus = async() => {
 
    return await doGet("api/telecommunication/getAllTelecommnicationMenus")
  }

  export const getAllTele = async() => {
    return await doGet("api/telecommunication/getAllTelecommnication")
  }

  //need to change the url 
  export const getAddTeleMenu = async(data) =>{
    return await doPost('api/telecommunication/addTelecommunicationMenus',data);
  }
  export const getEditTeleMenu = async(data) =>{
    return await doPut('api/telecommunication/editTelecommunicatiosMenus',data);
  }
  export const getDeleteTeleMenu = async(data) =>{
    return await doDelete('api/telecommunication/deleteTelecommunicationMenus',data);
  }
  
