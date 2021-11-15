<script setup>
import { ref } from "vue";
import { useFact } from "../composables/useFact";

const {animes, getAnimes} = useFact();
</script>

<template>
<div mt-16>
  <ul  class="grid grid-cols-3 gap-12">
    <router-link
     v-for="anime in animes" :key="anime"
     :to="`/${anime.anime_name}/facts`">
      <div class="hover:cursor-pointer bg-gray-600 mt-3 p-4 rounded-lg drop-shadow-2xl hover:scale-105">
        <h3 class="text-center font-bold bg-black text-white rounded-full p-1 border-2 border-gray-500">{{anime.anime_name}}</h3>
        <img class="rounded-lg mt-3 border-2 border-gray-500 overflow-clip h-64 w-52" :src="anime.anime_img">
      </div>
    </router-link>
  </ul>
</div>
</template>
