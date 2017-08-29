import React, {Component} from 'react'
import Navbar from './navbar'
import Sidebar from './sidebar2'
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
                <div className="application" key="1">
                    <div className="application-head">
                        <Navbar city="杭州" title="maizuo" />
                    </div>
                    <Content />
                    <Sidebar leftNavState={this.state.leftNavState} />
                </div>
        )
    }
}
