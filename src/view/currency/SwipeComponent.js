import React from 'react'
import Swipeable from 'react-swipeable'
import Wrapper from './Wrapper'

export default class SwipeComponent extends React.Component {
  swiping(e, deltaX, deltaY, absX, absY, velocity) {
    console.log(
      `You swiped deltaX ${deltaX} deltaY ${deltaY} absX ${absX} absY ${absY} velocity ${velocity}`,
    )
  }

  swipingLeft(e, absX) {
    console.log("You're Swiping to the Left...", e, absX)
  }

  swiped(e, deltaX, deltaY, isFlick, velocity) {
    // console.log('You Swiped...', e, deltaX, deltaY, isFlick, velocity)
    console.log(
      `You swiped deltaX ${deltaX} deltaY ${deltaY} isFlick ${isFlick} velocity ${velocity}`,
    )
  }

  swipedUp(e, deltaY, isFlick) {
    console.log('You Swiped Up...', e, deltaY, isFlick)
  }
  swipedDown(e, deltaY, isFlick) {
    console.log('You Swiped Down...', e, deltaY, isFlick)
  }
  render() {
    return (
      <Swipeable
        onSwiping={this.swiping}
        // onSwiped={this.swiped}
        // onSwipingLeft={this.swipingLeft}
        // onSwipingRight={this.swipingRight}
        // onSwipedUp={this.swipedUp}
        onSwipedDown={this.swipedDown}
      >
        <Wrapper />
      </Swipeable>
    )
  }
}
