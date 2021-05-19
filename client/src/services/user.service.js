import {request} from "@/services/generic.service";

const getUser = (id) => request({url : `u/${id}`, method: 'get'})

const getUsers = () => request({url : `u/`, method: 'get'})


export {
    getUser,
    getUsers
}