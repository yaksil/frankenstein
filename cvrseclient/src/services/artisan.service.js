import {request} from "@/services/generic.service";

const getArtisan = (id) => request({url : `artisans/${id}`, method: 'get'})

const getArtisans = () => request({url : `artisans/`, method: 'get'})

export {
    getArtisan,
    getArtisans
}