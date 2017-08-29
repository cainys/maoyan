import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import Index from '@/views/index'
import FilmList from '@/views/filmList'
import FilmDetail from '@/views/filmList/filmDetail'
import City from '@/views/city'
import {connect} from 'react-redux'

class Content extends Component{
    render() {
        let {animateCls} = this.props
        return (
            <div className="application-view">
                    <Route path="/" exact component={Index} />
                    <Route path="/filmList" component={FilmList} />
                    <Route path="/filmDetail/:id" component={FilmDetail} />
                    <Route path="/city" component={City} />
            </div>
        )
    }
}


export default Content
