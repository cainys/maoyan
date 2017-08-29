import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './sidebar.less'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
class Siderbar extends Component{
    static propTypes = {
        leftNavState: PropTypes.bool
    }
    constructor() {
        super()
    }
    state = {
        menuList: [
            {name: '首页', path: '/'},
            {name: '影片', path: '/filmList'},
            {name: '影院', path: '/cinema'},
            {name: '商城', path: '/shop'},
            {name: '我的', path: '/login'},
            {name: '卖座卡', path: '/card'}
        ]
    }
    render() {
        let {leftNavState} = this.props
        let aside = null
        if(leftNavState) {
            aside = <div className="sidebar-container sidebar-transition" onClick={this.props.changeAside.bind(this)}>
                            <div className="sidebar-overlay">
                                    <nav className="leftNav-transition">
                                        <ul>
                                            {
                                                this.state.menuList.map(menu => (
                                                    <li key={menu.name}>
                                                        <Link to={menu.path}>
                                                            <span>{menu.name}</span>
                                                            <i className="iconfont icon-arrow-right right" />
                                                        </Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </nav>
                            </div>
                    </div>
        } else {
            aside = <span />
        }
        return (
                <aside className="application-sidebar">
                    {aside}
                </aside>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        leftNavState: state.app.leftNavState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeAside: () => {
            dispatch({type: 'CHANGE_SIDEBAR'})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Siderbar)
