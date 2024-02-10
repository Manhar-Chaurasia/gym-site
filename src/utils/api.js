import axios from "axios";

const BASE_URL = "https://exercisedb.p.rapidapi.com";

const options = {
  method: "GET",
  params: { limit: 50 },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_FITHUB_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
