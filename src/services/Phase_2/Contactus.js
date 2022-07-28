import { doDelete,doGet } from "../../utils/request";

export  const getAllContactus = async() =>{
    return await doGet("api/contactUs/getAllContactUs");
} 

export const getDeleteContact = async (data) => {
    return await doDelete("api/contactUs/deleteContactUs",data)
}