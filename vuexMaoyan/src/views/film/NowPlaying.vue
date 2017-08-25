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
      console.log(this.movies)
    })
  },
  mounted () {
    window.addEventListener('scroll', () => {
      let filmWrap = document.getElementsByClassName('film-list-wrap')[0]
      console.log(window.innerHeight + window.scrollY)
      if ((window.innerHeight + 120 + window.scrollY) >= filmWrap.scrollHeight && this.count <= 7) {
        // window.removeEventListener('scroll')
        this.count += 1
        getNowFilm(this.count, 7).then(res => {
          this.movies = this.movies.concat(res.data.data.films)
          window.addEventListener('scroll')
        })
        window.removeEventListener('scroll')
      }
    })
  }
}
</script>
