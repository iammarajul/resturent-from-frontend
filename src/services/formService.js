import axios from 'axios';

const apiEndpoint = "http://13.229.111.146:5000/api/";

async function setForm(form) {
    try{
        const { data } = await axios.post(apiEndpoint, form);
        return data;
    }
    catch(ex){
        return ex.response.data;
    }
}

async function setFormById(id, form) {
    try{
        const { data } = await axios.post(apiEndpoint + id, form);
        return data;
    }
    catch(ex){
        return ex.response.data;
    }
}

async function submitFormService(form) {
    try{
        const { data } = await axios.post(apiEndpoint+"submit/form", form);
        return data;
    }
    catch(ex){
        return ex.response.data;
    }
}

async function submitFormByIdService(id,form) {
    try{
        const { data } = await axios.post(apiEndpoint+"submit/form/" + id, form);
        return data;
    }
    catch(ex){
        return ex.response.data;
    }
}

async function getFormById(id) {
    try{
        const { data } = await axios.get(apiEndpoint + id);
        return data;
    }
    catch(ex){
        console.log(ex);
        return ex.response.data;
    }
}

async function resendEmail(email) {
    try{
        const { data } = await axios.post(apiEndpoint + "resend/email", {email});
        return data;
    }
    catch(ex){
       return ex.response.data;
    }
}



async function saveFirstPage(form){
    try{
        const { data } = await axios.post(apiEndpoint + "first/page", form);
        return data;
    }
    catch(ex){
        console.log(ex);
       return ex.response.data;
    }
}

async function uploadImageService(form,config){
    try{
        const { data } = await axios.post(apiEndpoint + "upload/image", form, config);
        return data;
    }
    catch(ex){
       return ex.response.data;
    }
}


async function getShareableLink(id,form){
    try{
        const { data } = await axios.post(apiEndpoint + "shareablelink/" + id, form);
        return data;
    }
    catch(ex){
        return ex.response.data;
    }
}

export {
    getFormById, getShareableLink, resendEmail, saveFirstPage, setForm, setFormById, submitFormByIdService, submitFormService, uploadImageService
};

