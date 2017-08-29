import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './sidebar.less'
import {Link} from 'react-router-dom'
import QueueAnim from 'rc-queue-anim'
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

    componentWillReceiveProps(nextProps) {
        console.log('nextProps', nextProps, this.props)
    }

    componentDidUpdate() {
        
    }

    render() {
        let {leftNavState} = this.props
        return (
                <aside className="application-sidebar">
                <QueueAnim className="demo-content"
                    animConfig={[
                        { opacity: [1, 0]},
                        { opacity: [1, 0]}
                    ]}
                >
                {
                    leftNavState ? [
                        <div key="first" className="sidebar-container sidebar-transition" onClick={this.props.changeAside.bind(this)}>
                                <div className="sidebar-overlay">
                                        <nav className="leftNav-transition">
                                            <QueueAnim type={['left', 'right']} component="ul">
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
                                            </QueueAnim>
                                        </nav>
                                </div>
                        </div>
                    ] : null
                }
                 </QueueAnim>
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
