import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import './navbar.less'
import {connect} from 'react-redux'
class Navbar extends Component{
    static propTypes = {
        title: PropTypes.string,
        city: PropTypes.string
    }
    static defaultProps = {
        title: '卖座',
        city: '杭州'
    }
    render() {
        return(
            <nav id="toolbar">
                <h1>
                    <a href="javascropt: void(0)">
                        <div className="toolbar-title-icon" onClick={this.props.changeAside.bind(this)}>
                            <i className="iconfont icon-list" />
                        </div>
                        <div className="toolbar-title">
                            {this.props.title}
                        </div>
                    </a>
                </h1>
                <div className="user">
                    <Link to="/city" className="city">
                        <span>{this.props.city}</span>
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

const mapStateToProps = state => {
    return {
        city: state.app.city,
        title: state.app.title
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeAside: () => {
            dispatch({type: 'CHANGE_SIDEBAR'})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
