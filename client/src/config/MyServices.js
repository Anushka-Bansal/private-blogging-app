import axios from "axios";
import { MAIN_URL } from "./Url";

export function register(values) {
    return axios.post(`${MAIN_URL}users/register`, values);
}

export function login(values) {
    return axios.post(`${MAIN_URL}users/login`, values);
}
