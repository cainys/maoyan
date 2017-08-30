import React from 'react'
import PropTypes from 'prop-types'
import './cityItem.less'

export default class CityItem extends React.Component{
    static propTypes = {
        aclassName: PropTypes.string,
        titleText: PropTypes.string.isRequired,
        cities: PropTypes.array.isRequired
    }
    render() {
        return (
            <div className={this.props.aclassName ? this.props.aclassName : 'sort'}>
                <div className="city-index-title">
                    {this.props.titleText}
                </div>
                <div className="city-index-detail">
                    <ul className="list-unstyled">
                        {
                            this.props.cities.map((city) => <li key={city.name || city} className="city-item-detail city-item-detail-gprs">{city.name || city}</li>)
                        }        
                    </ul>
                </div>
            </div>
        )
    }
}
