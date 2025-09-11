import axios from "axios";


const baseUrl: string='localhost:3002//'
export const login=(email:string,password:string)=>{
    axios.post(`${baseUrl}/api/auth/login`)
}