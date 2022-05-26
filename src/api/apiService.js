import axios from "axios";

export default axios.create({
  baseURL: "https://spotify23.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
    "X-RapidAPI-Key": "747e9775fcmsh5575ff3f8cf0b71p13b8e8jsnfc1ce2e9426a",
  },
});
