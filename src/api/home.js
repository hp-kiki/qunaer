import axios from 'axios'

export const homedata=()=>{
    return axios({
        url:'/home'
    })
}
