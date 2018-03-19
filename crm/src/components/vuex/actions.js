import axios from "axios";
// axios.defaults.baseURL = "http://localhost:4000";
export default {
    getUser({commit},{url,nick,soft_mark}){
        axios.post(url,{ 
           nick,
           soft_mark
        }).then(res=>{
            console.log(res)
            return res.data;
        }).then(json=>{
            commit("getUser",json)
        })
    }
}