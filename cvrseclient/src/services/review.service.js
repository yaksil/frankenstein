import { request } from "@/services/generic.service";

const getReview = (id) => request({ url: `reviews/${id}`, method: "get" });

const getReviews = () => request({ url: `reviews/`, method: "get" });

export { getReview, getReviews };
