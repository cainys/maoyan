<template>
    <ul class="list-unstyled">
        <li v-for="movie in movies" :key="movie.id">
            <router-link :to="{name: 'filmDetail', params: {id: movie.id}}">
                <film-item :item="movie" />
            </router-link>
        </li>
    </ul>
</template>
<script>
import FilmItem from '@/components/FilmItem'
import {getNowFilm} from '@/api/index'
export default {
  name: 'nowPlaying',
  components: {
    FilmItem
  },
  data () {
    return {
      movies: {}
    }
  },
  beforeCreate () {
    getNowFilm(1, 7).then(res => {
      this.movies = res.data.data.films
    })
  }
}
</script>
