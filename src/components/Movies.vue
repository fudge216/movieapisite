<template>
  <div>
      <h1>Upcoming Movies</h1>
    <div v-for="movie in movies" :key=movie.id>
    <h4>{{movie.title}}</h4>
    <router-link :to="`//detail/${movie.id}}`"><p>{{movie.id}}</p></router-link>
 </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'Movies',
    data()
    {
        return{
            movies:[]
        }
    },
    mounted(){
        axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=805437e9d1e7778ece74f443e87004e4&language=en-US&page=1")
        .then (response => {
            console.log(response)
            this.movies = response.data.results;
        })
    }
}
</script>

<style>

</style>