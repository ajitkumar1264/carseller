import axios from "axios";
import applyMockAdapter from "./Auth/Auth";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3000",
});

const someConfigToUseMock = true;

if (someConfigToUseMock) {
    applyMockAdapter(axiosInstance);
}

export default axiosInstance;