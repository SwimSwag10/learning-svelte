// import {errors} from "$lib/stores.js";

// export async function api(endpoint, method, body, options) {
//   endpoint = import.meta.env.VITE_API_URL + endpoint;
//   let res = await fetch(endpoint, {
//     ...(method && {method}),
//     headers: {"Content-Type": "application/json"},
//     ...(body && {body: JSON.stringify(body)}),
//     ...options
//   });
//   if (res.status != 204) {
//     body = await res.json();
//   }
//   if (!res.ok) {
//     errors.update(() => body.errors);
//   }
//   return {ok: res.ok, body};
// }

// export async function openEndpoint(endpoint) {
//   endpoint = import.meta.env.VITE_API_URL + endpoint;
//   window.open(endpoint, "_self");
// }

// export default api;