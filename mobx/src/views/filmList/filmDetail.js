import React from 'react'
import ImgPlaceholder from '@/components/imgPlaceholder'
import {getFilmDetail} from '@/api/index'
import QueueAnim from 'rc-queue-anim'
export default class FilmDetail extends React.Component{
    constructor() {
        super()
        this.state = {
            film: {},
            show: false
        }
    }

    componentWillMount() {
        getFilmDetail(this.props.match.params.id).then(res => {

            this.setState({
                film: res.data.data.film,
                show: true
            })

        })
    }

    componentDidMount() {

    }

    getActors() {
      let actors = ''
      this.state.film.actors && this.state.film.actors.forEach(actor => {
        actors += actor.name + ' | '
      })
      actors = actors.slice(0, actors.length - 2)
      console.log('actor', actors)
      return actors
    }

    render() {
        let {film, show} = this.state
        console.log('film', film)

        return (
            <section className="content film-view">
                <div className="film-img-wrap">
                    <ImgPlaceholder src={film.cover ? film.cover.origin : ''} placeholder="http://static.m.maizuo.com/v4/static/app/asset/3d2cdb3bd9a23609aa2d84e7c2bfd035.png" />
                </div>
                <div>
                    <div className="player_mask hide">
                        <div id="youkuplayer" className="prevue-player" />
                    </div>
                </div>
                <QueueAnim type={['right', 'left']} className="demo-content">
                {
                    show ? [
                    <div className="film-intro" key="intro">
                            <div className="film-word1">影片简介</div>
                            <div className="film-word2">
                                <span>导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：</span>
                                <span>{film.director}</span>
                            </div>
                            <div className="film-word2">
                                <span>主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：</span>
                                <span>{this.getActors.bind(this)()}</span>
                            </div>
                            <div className="film-word2">
                                <span>地区语言：</span>
                                <span>{film.nation}</span>
                                <span>(</span><span>{film.language}</span><span>)</span>
                            </div>
                            <div className="film-word2">
                                <span>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型：</span>
                                <span>{film.category}</span>
                            </div>
                            <div className="film-word2">
                                <span>上映日期：</span>
                                <span>{new Date(film.premiereAt).Format('MM月dd日上映')}</span>
                            </div>
                            <div className="film-word3">{film.synopsis}</div>
                            <div className="operation">
                                <button className="cpn-primary-button ">立即购票</button>
                            </div>
                        </div>
                    ] : null
                }
                </QueueAnim>
            </section>
        )
    }
}