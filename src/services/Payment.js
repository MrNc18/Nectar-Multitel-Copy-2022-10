import  { doGet, doPost, doPut,doDelete,PayPut }  from "../utils/request"

export const getcreateRefernceId = async(data) =>{
    return await PayPut('api/payment/createRefrenceId',data);
  }

  export const getCreatePayment= async(data) =>{
    return await doPost('api/payment/createpayment',data);
  }

  export const getAllPayments = async () => {
    return await doGet("api/payment/getAllPayment")
   }