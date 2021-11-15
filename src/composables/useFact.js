import { ref } from "vue";
import axios from "axios";

const animes = ref("something");

const api = axios.create({
  baseURL: "https://anime-facts-rest-api.herokuapp.com/api/v1",
});

export const useFact = () => {
  const getAnimes = async () =>{
    const response = await api.get();
    animes.value = response.data.data;
  }

  getAnimes();
  return { animes, getAnimes };
};
