import React from 'react'
import CityItem from '@/components/cityItem/cityItem'
import { getCity } from '@/api/city'

export default class City extends React.Component{
    state = {
      citys: ['杭州'],
      items: [
        {className: 'gprs-city', titleText: 'GPS定位你所在的城市', cities: [{id: 16, name: '杭州', pinyin: 'hangzhou'}]},
        {
          className: 'hot-city',
          titleText: '热门城市',
          cities: [
              {id: 16, name: '杭州', pinyin: 'hangzhou'},
              {id: 12, name: '北京', pinyin: 'beijing'},
              {id: 11, name: '上海', pinyin: 'shanghai'},
              {id: 10, name: '深圳', pinyin: 'shenzhou'}
          ]
        }
      ],
      indexCity: [
        {
          className: 'sort',
          titleText: '按字母排序',
          cities: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        }
      ]
    }

    componentDidMount() {
        getCity().then((res) => {
        const cities = res.data.data.cities
        // const indexCity = this.state.indexCity
        let cityArr = []
        this.state.indexCity[0].cities.forEach((value) => {
            let obj = {}
            let arr = []
            obj.titleText = value
            arr = cities.filter((city) => {
                return city.pinyin.slice(0, 1) === value
            })
            obj.cities = arr
            if (arr.length !== 0) {
                cityArr.push(obj)
            }
        })
        this.setState({
            indexCity: this.state.indexCity.concat(cityArr)
        })
        })
    }

    render() {
        return (
            <section className="content city-view">
                {
                    this.state.items.map((item, index) => <CityItem key={index} aclassName={item.className} titleText={item.titleText} cities={item.cities} />)
                }
                <div className="index-city">
                    {
                        this.state.indexCity.map((item, index) => <CityItem key={index} aclassName={item.className} titleText={item.titleText} cities={item.cities} />)
                    }
                </div>
            </section>
        )
    }
}
