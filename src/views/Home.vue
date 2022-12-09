<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
const router = useRouter()
const searchParam = ref('')
const resultMovies = () => axios
  .get(`https://www.omdbapi.com/?s=${searchParam.value}&apikey=c71cb2d0`)
  .then((res) => { 
    const strSearchResults = JSON.stringify(res.data.Search)
    router.push({ name: 'movielist', state: {movies_list: strSearchResults} })
  })
</script>
<template>
  <main>
    <header>
    <img class="bg-home" src="../assets/undraw_home_cinema.svg">
    <div class="painel-header">
      <h1>Cinema 4You</h1>
      <span class="info">Busque por filmes ou séries</span>
      <form class="search-container">
        <input v-model="searchParam" placeholder="Encontre seu filme" class="searchMovie">
          <button type="button" class="btn-search" @click="resultMovies"><i class="fa-solid fa-magnifying-glass"></i></button>
      </form> 
    </div>
  </header>
  </main>
</template>

<style scoped>


.bg-home {
  display: block;
  margin: 150px 620px auto;
  height: 550px;
}
.painel-header {
  font-family: 'Libre Franklin';
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 240px;
  color: white;
  position: absolute;
  top: 300px;
  margin-left: 150px;
  margin-bottom: 25px;
}

.search-container {
  background: rgb(54, 54, 54);
  line-height: 40px;
  padding: 12px;
  border-radius: 60px;
  display: flex;
  margin: 7px;
  width: 260px;
}

.btn-search {
  background: rgb(54, 54, 54);
  color: rgb(255, 87, 36);
  padding: 12px;
  border-radius: 50px;
  transition: 0.4s ease;
  cursor: pointer;
}
.searchMovie {
  background: rgb(54, 54, 54);
  color:  rgb(228, 230, 231);
  border: none;
  line-height: 30px;
  font-size: 14px;
  transition: 0.7s ease-in-out;
  outline: none;
}

</style>
