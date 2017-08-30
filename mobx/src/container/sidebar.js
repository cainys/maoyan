import React, {Component} from 'react'
import './sidebar.less'
import {Link} from 'react-router-dom'
import QueueAnim from 'rc-queue-anim'
import {observer, inject} from 'mobx-react'

@inject('appState')
@observer
class Siderbar extends Component{

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
        let {leftNavState, changeAside} = this.props.appState
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
                        <div key="first" className="sidebar-container sidebar-transition" onClick={changeAside.bind(this)}>
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

export default Siderbar
