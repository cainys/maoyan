import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.less'
import Slider from '@/components/slider/slider'
import MovieItem from '@/components/movieItem/movieItem'
import {getSlider, getNowFilm, getSoonFilm} from '@/api/index'

class Index extends Component{
    constructor() {
        super()
        this.state = {
            movies: [],
            comingSoon: [],
            imgDate: []
        }
    }
    componentWillMount() {
        this.getImgData().then(res => { // http://m.maizuo.com/v4/api/billboard/home?__t=1503035600664
            console.log('bill',res.data.data.billboards)
            let data = res.data.data.billboards
            data.push(data[0])
            this.setState({
                imgDate: data
            })
        })

        getNowFilm(1, 5).then((res) => {
            console.log(res)
            this.setState({
                movies: res.data.data.films
            })
        })

        getSoonFilm(1, 5).then((res) => {
            this.setState({
                comingSoon: res.data.data.films
            })
        })
    }
    getImgData () {
      return new Promise((resolve, reject) => {
        getSlider().then((res) => {
          if (res.data.msg === 'ok') {
            resolve(res)
          } else {
            resolve(this.getImgData())
          }
        })
      })
    }
    render() {
        let {movies} = this.state
        console.log(this.state.imgDate)
        return (
            <section className="content">
                <div className="slick-slider">
                    <Slider items={this.state.imgDate} speed={1.2} delay={2.1} pause autoplay dots={false} arrows={false} />
                </div>
                <div>
                <div className="movie">
                    <ul className="list-unstyled">
                    {
                        movies.map((movie) => (
                            <li key={movie.id}>
                                <Link to={"/filmDetail/" + movie.id}>
                                    <MovieItem item={movie} />
                                </Link>
                            </li>
                        ))
                    }
                    </ul>
                </div>
                <div className="more-buttton">
                    更多热映电影
                </div>
                </div>
                <div>
                <div className="dividing-line">
                    <div className="upcoming">即将上映</div>
                </div>
                <div className="movie">
                    <ul className="list-unstyled">
                    {
                        this.state.comingSoon.map((movie) =>(
                            <li key={movie.id}>
                                <Link to={"/filmDetail/" + movie.id}>
                                    <MovieItem item={movie} />
                                </Link>
                            </li>
                        ))
                    }
                    </ul>
                </div>
                <div className="more-buttton">
                    更多即将上映电影
                </div>
                </div>
            </section>
        )
    }
}
export default Index
