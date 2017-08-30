import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {observer, inject} from 'mobx-react'
import './navbar.less'

@inject('appState') @observer class Navbar extends Component{

    render() {
        console.log('props', this.props)
        return(
            <nav id="toolbar">
                <h1>
                    <div className="icon-wrap">
                        <div className="toolbar-title-icon" onClick={this.props.appState.changeAside.bind(this)}>
                            <i className="iconfont icon-list" />
                        </div>
                        <div className="toolbar-title">
                            {this.props.appState.title}
                        </div>
                    </div>
                </h1>
                <div className="user">
                    <Link to="/city" className="city">
                        <span>{this.props.appState.city}</span>
                        <i className="iconfont icon-dropdown" />
                    </Link>
                    <a to="/" className="user-icon">
                        <i className="iconfont icon-user" />
                    </a>
                </div>
            </nav>
        )
    }
}

export default Navbar
