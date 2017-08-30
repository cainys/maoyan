import React from 'react'
import {Link, Route} from 'react-router-dom'
import NowPlaying from './nowPlaying'
import ComingSoon from './comingSoon'
import PropTypes from 'prop-types'
import './index.less'
export default class FilmList extends React.Component{
    static propTypes = {
        currentTab: PropTypes.string.isRequired
    }
    static defaultProps = {
        currentTab: 'now'
    }
    render() {
        let {currentTab} = this.props
        console.log(this.props.match)
        return (
            <section className="content film-view">
                <div className="film-list-wrap">
                    <div className="film-list-nav">
                        <Link to="/filmList">
                            <div className={"now-playing " + (currentTab === "now" ? " choosing" : null)}>正在热映</div>
                        </Link>
                        <Link to="/filmList/coming-soon">
                            <div className={"coming-soon " + (currentTab === "soon" ? "choosing" : null)}>即将上映</div>
                        </Link>
                    </div>
                    <div className="film-list">
                        <Route path={`${this.props.match.path}`} exact component={NowPlaying} />
                        <Route path={`${this.props.match.path}/coming-soon`} component={ComingSoon} />
                    </div>
                    <div className="cpn-back-to-top" />
                </div>
            </section>
        )
    }
}