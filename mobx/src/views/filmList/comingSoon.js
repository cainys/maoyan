import React from 'react'
import {Link} from 'react-router-dom'
import FilmItem from '@/components/filmItem/filmItem'
// import PropTypes from 'prop-types'
import {getSoonFilm} from '@/api/index'

export default class ComingSoon extends React.Component{
    constructor() {
        super()
        this.state = {
            movies: []
        }
    }
    componentWillMount() {
        getSoonFilm().then((res) => {
            this.setState({
                movies: res.data.data.films
            })
            // this.movies = res.data.data.films
        })
    }
    render() {
        let {movies} = this.state
        return (
            <ul className="list-unstyled">
            {
                movies.map((movie) => (
                    <li key={movie.id}>
                        <Link to={'/filmDetail/' + movie.id}>
                            <FilmItem item={movie} />
                        </Link>
                    </li>
                ))
            }
            </ul>
        )
    }
}