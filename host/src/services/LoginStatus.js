import { persistor } from "../Store/store";

export function isAuthenticated(){
    return localStorage.getItem("authenticated")=="true";
}
export function logout(){
    persistor.purge();
    return localStorage.removeItem("authenticated");
}