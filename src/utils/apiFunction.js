import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8484/api",
  withCredentials: true,
});

// Add a request interceptor
// axiosInstance.interceptors.request.use(
//   (config) => {
//     // Retrieve stored cookies from localStorage
//     // const storedCookies = localStorage.getItem("cookies");
//     // if (storedCookies) {
//     //   // config.headers["Authorization"] = `Bearer ${token}`;
//     //   config.defaults.headers.common["Cookie"] = storedCookies;
//     // }
//     // return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

const getApi = (url) => {
  return axiosInstance.get(url);
};

const getApiById = (url, id) => {
  return axiosInstance.get(`${url}/${id}`);
};

const postApi = (url, data) => {
  return axiosInstance.post(url, data);
};

const putApi = (url, id, data) => {
  return axiosInstance.put(`${url}/${id}`, data);
};

const deleteApi = (url, id) => {
  return axiosInstance.delete(`${url}/${id}`);
};

export { getApi, getApiById, postApi, putApi, deleteApi };
