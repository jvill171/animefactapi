import { ref } from "vue";
import axios from "axios";

const animes = ref();
const myURL = ref();
const myFacts = ref();

const api = axios.create({
  baseURL: "https://anime-facts-rest-api.herokuapp.com/api/v1",
});

export const useFact = () => {
  const getAnimes = async () =>{
    const response = await api.get();
    animes.value = response.data.data;
  };

  const getAnimeFacts = async (anime_name) =>{
    const response = await api.get(`/${anime_name}`);
    myFacts.value = response.data.data;
  };

  getAnimes();
  return { animes, myFacts, getAnimes, getAnimeFacts };
};
