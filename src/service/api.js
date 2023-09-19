import axios from "axios";

const url = 'http://localhost:8000';

export const addUser = async (data) => {
    try {
        await axios.post(`${url}/users/add`, data);
    }
    catch (err) {
        console.log("Error while adding user", err);
    }
}

export const getUsers = async () => {
    try{
        let response = await axios.get(`${url}/users`);
        return response.data;
    }
    catch(err){
        console.log("Error while getting users from database", err);
    }
}