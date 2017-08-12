import React from 'react'
import ReactSwipe from 'react-swipe'
import Slip from './slip'
import Calculator from './calculator'
import Settings from './settings'

export default class Wrapper extends React.Component {
  render() {
    return (
      <div>
        <ReactSwipe
          ref="reactSwipe"
          swipeOptions={{
            startSlide: 1,
            continuous: false,
          }}
        >
          <div>
            <Calculator />
          </div>
          <div>
            <Slip />
          </div>
          <div>
            <Settings />
          </div>
        </ReactSwipe>
        <div>
          <button onClick={() => this.refs.reactSwipe.slide(0, 300)}>
            Calculator
          </button>
          <button onClick={() => this.refs.reactSwipe.slide(1, 300)}>
            Slip
          </button>
          <button onClick={() => this.refs.reactSwipe.slide(2, 300)}>
            Settings
          </button>
        </div>
      </div>
    )
  }
}
