import { doGet, doPost, doPut,doDelete }  from "../utils/request"
import ProductModel from "../Model/ProductModel"
 import {ProductCategoryModel} from "../Model/ProductCategoryModel"
import {createOptionForReactSelect} from "../utils/index"


export const getAllCategories = async () => {
    const response = await doGet("api/product/getAllCategory");
  
    if (response.data) {
      new ProductCategoryModel(
        createOptionForReactSelect(response.data, "name", "id")
      )._saveAll();
    }
  
    return response;
  };
  export const addProductCategory = async (name, description) => {
    const response = await doPost("api/product/addCategory", {
      name,
      description,
    });
    const data = response?.data?.data;
    if (data?.length) {
      new ProductCategoryModel(
        createOptionForReactSelect(data, "name", "id")
      )._saveAll();
    }
  
    return response;
  };
  
  export const deleteProductCategory = async (id) => {
    const response = await doDelete("api/product/deleteCategory", { id });
    const data = response?.data?.data;
    if (data) {
      new ProductCategoryModel(data)._delete(data.id);
    }
  
    return response;
  };