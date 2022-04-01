import { doGet, doPost, doPut,doDelete }  from "../utils/request"



export const getAllCategories = async () => {
   return await doGet("api/product/getAllCategory")
  }
  export const getAddCategory= async(data) =>{
    return await doPost('api/product/addCategory',data);
  }
  export const getEditCategory = async(data) =>{
    return await doPut('api/product/editCategory',data);
  }
  export const getDeleteCategory = async(data) =>{
    return await doDelete('api/product/deleteCategory',data);
  }
  export const getProductsByCategory= async(data) =>{
    return await doPost('api/product/getProductsByCategory',data);
  }