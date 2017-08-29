import React from 'react'
import PropTypes from 'prop-types'
import './index.less'

class ImgPlaceholder extends React.Component{
    static propTypes = {
      src: PropTypes.string,
      placeholder: PropTypes.string
    }
    render() {
        return (
            <div className="img-responsive" style={{backgroundImage: 'url('+this.props.placeholder+')'}}>
                <img alt="" src={this.props.src} style={{width: '100%', transition: 'all 1.2s ease'}} />
            </div>
        )
    }
}
export default ImgPlaceholder
