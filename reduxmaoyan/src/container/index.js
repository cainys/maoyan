import React, {Component} from 'react'
import Navbar from './navbar'
import Sidebar from './sidebar'
import Content from './content'
import './index.less'

export default class App extends Component {
    constructor() {
        super()
    }
    state = {
        leftNavState: true
    }
    render() {
        return (
            <div className="application">
                <div className="application-head">
                    <Navbar city="杭州" title="maizuo" />
                </div>
                <Content />
                <Sidebar leftNavState={this.state.leftNavState} />
            </div>
        )
    }
}
