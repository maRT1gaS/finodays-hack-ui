import axios from "axios"
import { API_URL } from "../constants/env"

export const apiInstanseV1 = axios.create({
    baseURL: API_URL,
})