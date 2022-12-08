<template>
	<div
		id="app"
		v-for="movie in movieList"
		class="cardsMovie"
	>
		<CardMovie :movie-title="movie.Title" :year="parseInt(movie.Year)" :poster="movie.Poster" :imdbID="movie.imdbID" />
			
	</div>
</template>

<script setup>
import CardMovie from '@/components/components/CardMovie.vue'
 
const props = defineProps({
	movieList: Array
})

</script>

<style>
#app {
  background-color: #060206;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}
</style>