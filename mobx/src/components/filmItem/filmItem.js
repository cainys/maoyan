import React from 'react'
import PropTypes from 'prop-types'
import './filmItem.less'
import ImagePlaceholder from '../imgPlaceholder'

export default class FilmItem extends React.Component{
    static propTypes = {
        item: PropTypes.object.isRequired
    }
    render() {
        let {item} = this.props
        return (
            <div className="film-item">
                <div className="film-item-img">
                    <ImagePlaceholder src={item.poster.thumbnail} placeholder="http://static.m.maizuo.com/v4/static/app/asset/23568dc30235133ebeec89fbded3863b.png" />
                </div>
                <div className="film-desc">
                    <div className="film-next-arrow">
                        <i className="iconfont icon-arrow-right film-next-icon" />
                    </div>
                    {
                        item.isNowPlaying ? <div className="film-grade">{item.grade}</div> : null
                    }
                    
                    <div className="film-name">{item.name}</div>
                    <div className="film-intro">
                        {item.intro}
                    </div>
                    {
                        item.isNowPlaying ? <div className="film-counts">{item.cinemaCount}家影院上映&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.watchCount}人购票</div> : 
                                            <div className="film-premiere-date">{new Date(item.premiereAt).Format("MM月dd日上映")}</div>
                    }
                </div>
            </div>
        )
    }
}