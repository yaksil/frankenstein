import {request} from "@/services/generic.service";

const getProduct = (id) => request({url : `c/${id}`, method: 'get'})

const getProducts = () => request({url : `c/`, method: 'get'})

export {
    getProduct,
    getProducts
}