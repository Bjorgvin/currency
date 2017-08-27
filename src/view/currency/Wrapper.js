import React from 'react'
import ReactSwipe from 'react-swipe'
import Slip from './slip'
import Calculator from './calculator'
import Settings from './settings'
import styled from 'styled-components'
const Content = styled.div`overflow: scroll;`
const Foot = styled.div`
  position: fixed;
  left: 0;
  bottom: 0px;
  width: 100%;
  height: 35px;
  display: flex;
  z-index: 9999;
  background-color: blue;
  justify-content: space-between;
`

export default class Wrapper extends React.Component {
  slideChanged(index, element) {
    // when changing slides we scroll to top
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div>
        <Content>
          <ReactSwipe
            ref="reactSwipe"
            swipeOptions={{
              callback: this.slideChanged,
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
        </Content>
        <Foot>
          <button onClick={() => this.refs.reactSwipe.slide(0, 300)}>
            Calculator
          </button>
          <button onClick={() => this.refs.reactSwipe.slide(1, 300)}>
            Slip
          </button>
          <button onClick={() => this.refs.reactSwipe.slide(2, 300)}>
            Settings
          </button>
        </Foot>
      </div>
    )
  }
}
