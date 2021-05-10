<template>
  <div>
      <h1>Movie Detail</h1>
      <p>{{detailObj.title}}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Detail',
    data(){
        return{
            id:this.$route.params.id
        }
    },
    mounted()
    {
        axios.get(`https://api.themoviedb.org/3/movie/${this.id}?api_key=805437e9d1e7778ece74f443e87004e4&language=en-US`)
        .then( response =>{
            console.log(response);
            this.detailObj = response.data
        })
    }
}
</script>

<style>

</style>