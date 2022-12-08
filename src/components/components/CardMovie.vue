<template>
    <div class="cardDetailsMovie">
        <img class="posters" :src= poster />
        <div class="details"> 
        <span class="titleMovies"> {{movieTitle}} </span>
        <span class="yearMovies"> {{year}} </span>
        <router-link :to="{ name: 'pagemovie', query: {q: imdbID}}">Ler mais</router-link>
    </div>
    </div>
</template>

<script setup>
const props = defineProps({
    movieTitle: String,
    year: Number,
    poster: String,
    imdbID: String
})
</script>

<style>
.cardDetailsMovie {
  height: 335px;
  width: 195px;
  margin: 30px;
  border-radius: 15px;
  color: white;
  align-items: center;
  box-shadow: 1px 3px 5px 7px #090911;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.posters {
  object-fit: fill;
  width: 190px;
  height: 250px;
  box-shadow: 0px 8px 18px rgba(0, 0, 0, 0.7);
  border-radius: 12px;
}
.details {
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
}

</style>