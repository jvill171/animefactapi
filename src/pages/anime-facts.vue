<script setup>
import {useRoute} from "vue-router";
import {useFact} from "../composables/useFact";

const route = useRoute();
const {id} = route.params;

const {animes, myFacts, getAnimes, getAnimeFacts } = useFact();

getAnimeFacts(id);
</script>

<template>

<h3 class="text-3xl font-bold border-2 border-black rounded-lg text-center w-auto bg-gray-300 mt-10 py-4">{{id}}</h3>

    <div mt-16>
        <ul  class="grid grid-cols-3 gap-12">
            <li v-for="f in myFacts" :key="f">
                <h3 class="mt-10 text-center font-bold bg-white rounded-lg p-1 border-2 border-gray-500">{{f.fact}}</h3>
            </li>
        </ul>
    </div>
</template>