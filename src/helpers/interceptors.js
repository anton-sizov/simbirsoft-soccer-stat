import axios from "axios";

export default function setup() {
  axios.interceptors.request.use(
    function (config) {
      const token = process.env.VUE_APP_API_TOKEN;

      if (token) {
        config.headers["X-Auth-Token"] = token;
      }

      config.baseURL = process.env.VUE_APP_API_URL;

      return config;
    },
    function (err) {
      return Promise.reject(err);
    }
  );
}
