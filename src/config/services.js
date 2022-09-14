import axios from 'axios';
import { APIURL,USERAPI } from './url';

function getProductbyId(id){
    return axios.get(`${APIURL}${id}`)
}
function deleteProduct(id){
    return axios.delete(`${APIURL}${id}`)
} 

function postUsers(state){
    return axios.post(USERAPI,state)
}
function getUserdetails(){
    return axios.get(USERAPI)
}
function getProduct(){
    return axios.get(APIURL)
}
export {postUsers,getUserdetails,getProduct,getProductbyId,deleteProduct}
