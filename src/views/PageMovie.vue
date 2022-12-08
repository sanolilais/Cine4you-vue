<template>
    <div 
      v-if="!isFetching"
      class="movie-section"
    >
      <div
        class="bgContainer"
        :style="`background-image: url(${movie.Poster});`"
      ></div>
      <div class="movie-infos">
        <span class="movie-title">{{ movie.Title }}</span>
        <div class="movie-genres">
          <span 
            v-for="genre in genresArray"
            class="movie-genre"
          >
              {{ genre }}
          </span>
        </div>
        <span class="movie-actors">
          {{ movie.Actors }}
        </span>
        <div class="movie-details">
          <span class="movie-runtime">
            {{ movie.Runtime }}
          </span>
          <span class="separator"></span>
          <span class="movie-release">
            {{ movie.Year }}
          </span>
          <span class="separator"></span>
          <span class="movie-langs">
            {{ movie.Language }}
          </span>
      </div>
        <div class="movie-plot">
          {{ movie.Plot }}
        </div>
     </div>
     </div>
</template>

<script setup>
import axios from 'axios'
import { ref, onBeforeMount, computed } from 'vue'

const movie = ref({})
const isFetching = ref(true)

const genresArray = computed(() => {
  return isFetching.value ? [] : movie.value.Genre.split(', ')
})

const props = defineProps({
  movieId: {
    type: String,
    default: 'tt0080453'
  }
})

const fetchMovie = () => { 
  axios.get(`http://www.omdbapi.com/?i=${props.movieId}&apikey=c71cb2d0`)
    .then(res => {
      movie.value = res.data
      isFetching.value = false
    })
}

onBeforeMount(() => {
  fetchMovie()
})
</script>

<style>

.movie-section {
  font-family: 'Libre Franklin';
  font-weight: 700;
  margin-top: 40px;
  padding: 30px;
  width: 100%;
  max-width: 1200px;
  height: 543px;
}

.movie-infos {
  color: white;
  display: flex;
  flex-direction: column;
  width: 497px;
  margin: 50px;
}

.movie-title {
  font-size: 30px;
  margin: 12px;
}

.movie-genre {
  display: inline-flex;
  width: 90px;
  height: 30px;
  justify-content: center;
  align-items: center;
  border: 1px solid #2b2b69;
  padding: 5px;
  border-radius: 15px;
  text-transform: uppercase;
  font-size: 12px;
}

.movie-actors {
  width: 75%;
  text-transform: uppercase;
  font-size: 12px;
  margin: 12px;
}

.movie-details {
  max-width: 75%;
  align-items: center;
  margin: 12px;
}

.separator {
  display: inline-block;
  background-color: white;
  width: 7px;
  height: 7px;
  margin-right: 10px;
  border-radius: 50%;
}

.movie-plot {
  width: 75%;
  line-height: 30px;
  margin: 12px;
}

.bgContainer {
  background-image: url(https://www.rbsdirect.com.br/imagesrc/24100143.jpg?w=1200&h=630&a=c&version=1575255600);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: .3;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>