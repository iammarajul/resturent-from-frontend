import axios from 'axios';
import env from '../assets/env.js';

const apiEndpoint = env.apiEndpoint+"admin";



async function getAllForms() {
    try{
        const { data } = await axios.get(apiEndpoint);
        return data;
    }
    catch(ex){
        return ex.response.data;
    }
}
async function getFormById(id) {
    try{
        const { data } = await axios.get(apiEndpoint + "/" + id);
        return data;
    }
    catch(ex){
        console.log(ex);
        return ex.response.data;
    }
}

async function deletebyID(id) {
    try{
        const { data } = await axios.delete(apiEndpoint + "/" + id);
        return data;
    }
    catch(ex){
        console.log(ex);
        return ex.response.data;
    }
}

export {
    deletebyID, getAllForms,
    getFormById
};

