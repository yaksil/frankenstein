import {request} from "@/services/generic.service";

const getReview = (id) => request({url : `r/${id}`, method: 'get'})

const getReviews = () => request({url : `r/`, method: 'get'})

// TODO get reviews by product or smth better чем то дерьмо что у меня сейчас бля
//const getProductsByArtisan = (query) => request({url: `p/?artisan=${query}`, method: 'get'})

export {
    getReview,
    getReviews
}