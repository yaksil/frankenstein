import { request } from "@/services/generic.service";

const getOrder = (id) => request({ url: `orders/${id}`, method: "get" });

const getOrders = () => request({ url: `orders/`, method: "get" });

export { getOrders, getOrder };
