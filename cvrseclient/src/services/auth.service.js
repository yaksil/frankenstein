import { request } from "@/services/generic.service";

const serviceLogin = (payload) =>
  request({ url: `auth/login/`, method: "post", payload });

const serviceLogout = (payload) =>
  request({ url: `auth/logout/`, method: "post", payload });

export { serviceLogin, serviceLogout };
