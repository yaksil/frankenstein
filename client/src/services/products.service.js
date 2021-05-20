import {request} from "@/services/generic.service";

const getProduct = (id) => request({url: `p/${id}`, method: 'get'})

const getProducts = () => request({url: `p/`, method: 'get'})

export {
    getProduct,
    getProducts
}