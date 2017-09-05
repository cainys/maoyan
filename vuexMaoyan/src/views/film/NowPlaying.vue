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
      movies: [],
      count: 1
    }
  },
  beforeCreate () {
    getNowFilm(1, 7).then(res => {
      this.movies = res.data.data.films
    })
  },
  mounted () {
    let sw = true
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop + window.innerHeight >= document.body.offsetHeight && this.count < 7) {
        if (sw === true) {
          sw = false
          this.count += 1
          getNowFilm(this.count, 7).then(res => {
            this.movies = this.movies.concat(res.data.data.films)
            sw = true
          }).catch(error => console.log(error))
        }
      }
    })
  }
}
</script>
