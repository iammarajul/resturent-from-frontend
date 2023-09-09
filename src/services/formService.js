import axios from 'axios';

const apiEndpoint = "http://localhost:5000/api/";

async function setForm(form) {
    try{
        const { data } = await axios.post(apiEndpoint, form);
        return data;
    }
    catch(ex){
        console.log(ex);
    }
}


export {
    setForm
};

