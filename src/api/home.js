import axios from 'axios'

//获取首页数据
export const homedata=()=>{
    return axios({
        url:'/home'
    })
}

//获取城市页数据
export const citylist=()=>{
    return axios({
        url:'/city'
    })
}

export const detalits=()=> {
    return axios({
        url:'/detail'
    })
}
