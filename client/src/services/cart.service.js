import {request} from "@/services/generic.service";

const getCart = (id) => request({url : `cart/${id}`, method: 'get'})

const getCarts = () => request({url : `cart/`, method: 'get'})


export {
    getCart,
    getCarts
}