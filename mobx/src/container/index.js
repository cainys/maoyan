import React, {Component} from 'react'
import Navbar from './navbar'
import Sidebar from './sidebar'
import Content from './content'
import './index.less'

class Index extends Component {
    constructor() {
        super()
    }
    render() {
        return (
                <div className="application">
                    <div className="application-head">
                        <Navbar />
                    </div>
                    <Content />
                    <Sidebar />
                </div>
        )
    }
}
export default Index
