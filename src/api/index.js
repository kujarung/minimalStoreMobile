import axios from "axios";
const DOMAIN = "http://localhost:8080/api";

const api = async (method, url, data, header) => {
  if(method === "get") {
    try {
      const res = await axios({
        method,
        url: DOMAIN + url,
        params : data
      });
      return res;
    } catch(error) {
    }
  } else {
    try {
      console.log(DOMAIN + url)
      axios.defaults.headers.common['Authorization'] = header
      const res = await axios({
        method,
        url: DOMAIN + url,
        data,
      });
      console.log(res)
      return res;
    } catch(error) {
    }
  }
};

export default api;