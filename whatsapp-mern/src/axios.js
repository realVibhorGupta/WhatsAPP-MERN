import axios from  "axios";
//conection to backend
const instance  = axios.create({
    baseURL:"https://whatsapp-backend-mern-1.herokuapp.com"  
});

export default instance;