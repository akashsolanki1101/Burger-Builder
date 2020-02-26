import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://react-app-burgerbuilder-ecf2c.firebaseio.com"
});

export default axiosInstance;
