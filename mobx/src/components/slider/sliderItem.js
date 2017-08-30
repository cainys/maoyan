import React from 'react'
export default class SliderItem extends React.Component {
    render() {
        let {count, item} = this.props
        let width = 100 / count + '%'
        return (
            <li className="slider-item" style={{width: width}}>
                <img src={item.imageUrl} alt={item.imageUrl} />
            </li>
        )
    }
}
