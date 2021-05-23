import {request} from "@/services/generic.service";

const getCategory = (id) => request({url : `c/${id}`, method: 'get'})

const getCategories = () => request({url : `c/`, method: 'get'})

export {
    getCategory,
    getCategories
}