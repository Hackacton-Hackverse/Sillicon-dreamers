import { loginURL, createUserURL } from "./Routes";
import axios from "axios";

const authSiginin = async (email,password)=>{
    const response =  await axios.post(loginURL,{email,password});
    if(response.status==200){
        if(response.data.accessToken){
            localStorage.setItem("user",JSON.stringify(response.data));
        }
        return response.data;
    } 
}

const logout = ()=>{
    localStorage.removeItem("user");
}

const authSignup = async (username,email,password)=>{
    const response = await axios.post(createUserURL,{username,email,password});
    if (response.status==200){
        console.log("Authentication success");
    }
}

const getCurrentUser = ()=>{
    return JSON.parse(localStorage.getItem("user"));
}

export {authSiginin,logout, authSignup,getCurrentUser}