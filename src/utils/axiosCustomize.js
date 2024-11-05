import axios from "axios";
import nProgress from "nprogress";

const instance = axios.create({
    baseURL: 'https://phimapi.com/',

});

nProgress.configure({
  showSpinner:false,
  trickleSpeed:70
})


instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    nProgress.start();
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    nProgress.done();
    return response.data;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

export default instance