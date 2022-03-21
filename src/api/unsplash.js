import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID UJU3HNa87sqdWgu_7vRqceE1HANBfm-M9JHrRonISuM",
  },
});
