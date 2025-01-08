import { persistor } from "../reduxstore/store";

export function isAuthenticated(){
    return localStorage.getItem("authenticated")=="true";
}
export function logout(){
    persistor.purge();
    return localStorage.removeItem("authenticated");
}