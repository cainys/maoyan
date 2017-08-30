import React from 'react'
import PropTypes from 'prop-types'
import ImagePlaceholder from '../imgPlaceholder'
import './movieItem.less'
export default class MovieItem extends React.Component{
    static propTypes = {
        item: PropTypes.object.isRequired
    }
    render() {
        let {item} = this.props
        return (
            <div className="movie-item">
                <div className="movie-item-img">
                    <ImagePlaceholder src={item.cover.origin} placeholder="http://static.m.maizuo.com/v4/static/app/asset/3d2cdb3bd9a23609aa2d84e7c2bfd035.png" />
                </div>
                <div className={'row' + (item.isNowPlaying ? ' des' : ' upcoming-desc')}>
                    <div className={'left' + (item.isNowPlaying ? ' col-xs-10' : ' col-xs-7')}>
                        <div className="file-name">
                            {item.name}
                        </div>
                        {
                            item.isNowPlaying ? <div className="count">{item.cinemaCount}家影院上映{item.watchCount}人购票</div> : null
                        }
                    </div>
                    <div className={'right' + (item.isNowPlaying ? ' col-xs-2' : ' col-xs-5')}>
                        {item.isNowPlaying ? item.grade : new Date(item.premiereAt).Format("MM月dd日上映")}
                    </div>
                </div>
            </div>
        )
    }
}