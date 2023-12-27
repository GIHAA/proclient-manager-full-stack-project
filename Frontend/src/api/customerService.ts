import axios from "axios";
import { BE_URL } from "./Constants";

interface CustomerCreatePayload {
    name: string;
}

interface CustomerUpdatePayload {
    name: string;
}

const createCustomer = async (payload:any) =>{
    const response = await axios.post(`${BE_URL}/customer`, payload);
    return response;
}

const getAllCustomers = async () =>{
    const response = await axios.get(`${BE_URL}/customer`);
    return response;
}

const updateCustomer = async (payload : any) =>{
    const response = await axios.put(`${BE_URL}/customer`, payload);
    return response;
}

const deleteCustomer = async (id : string) =>{
    const response = await axios.delete(`${BE_URL}/customer/${id}`);
    return response;
}

const customerService = {
    createCustomer,
    getAllCustomers,
    updateCustomer,
    deleteCustomer
};
  
export default customerService;