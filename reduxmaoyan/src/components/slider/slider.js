import React, { Component } from 'react'

require('./slider.less')

import SliderItem from './sliderItem'
import SliderDots from './sliderDots'
import SliderArrows from './sliderArrows'

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nowLocal: 0,
      spd: 1
    };
  }

  componentDidMount() {
    this.goPlay()
  }

  componentWillUnmount() {
    // 组件卸载时清除定时器
    clearInterval(this.autoPlayFlag)
  }

    // 向前向后多少
  turn(n) {
    let m = this.state.nowLocal + n
    if(m === this.props.items.length) {
        this.setState({
            spd: 0
        })
    } else {
        this.setState({
            spd: 1
        })
    }
    if(m < 0) {
      m += this.props.items.length
    }
    if(m >= this.props.items.length) {
      m -= this.props.items.length
    }
    this.setState({nowLocal: m})
  }

    // 开始自动轮播
  goPlay() {
    if(this.props.autoplay) {
      this.autoPlayFlag = setInterval(() => {
        this.turn(1)
      }, this.props.delay * 1000)
    }
  }

  // 暂停自动轮播
  pausePlay() {
    clearInterval(this.autoPlayFlag)
  }

  render() {
    let count = this.props.items.length;

    let itemNodes = this.props.items.map((item, idx) => {
      return <SliderItem item={item} count={count} key={'item' + idx} />
    });

    let arrowsNode = <SliderArrows turn={this.turn.bind(this)} />

    let dotsNode = <SliderDots turn={this.turn.bind(this)} count={count} nowLocal={this.state.nowLocal} />

    return (
      <div
        className="slider"
        onMouseOver={this.props.pause?this.pausePlay.bind(this):null} onMouseOut={this.props.pause?this.goPlay.bind(this):null}>
          <ul style={{
              left: -100 * this.state.nowLocal + '%',
              transitionDuration: (this.state.spd === 0 ? this.state.spd : this.props.speed) + 's',
              width: this.props.items.length * 100 + '%'
            }}>
              {itemNodes}
          </ul>
          {this.props.arrows?arrowsNode:null}
          {this.props.dots?dotsNode:null}
        </div>
      );
  }
}

Slider.defaultProps = {
  speed: 1,
  delay: 2,
  pause: true,
  autoplay: true,
  dots: true,
  arrows: true,
  items: [],
};
Slider.autoPlayFlag = null