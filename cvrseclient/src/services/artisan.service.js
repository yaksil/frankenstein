import {request} from "@/services/generic.service";

const getArtisan = (id) => request({url : `a/${id}`, method: 'get'})

const getArtisans = () => request({url : `a/`, method: 'get'})

export {
    getArtisan,
    getArtisans
}