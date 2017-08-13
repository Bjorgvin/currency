import React from 'react'
import Swipeable from 'react-swipeable'
import Wrapper from './Wrapper'

export default class SwipeComponent extends React.Component {
  constructor(props) {
    super(props)
    this.swiping = this.swiping.bind(this)
    this.swipedDown = this.swipedDown.bind(this)

    this.state = { loader: false }
  }
  swiping(e, deltaX, deltaY, absX, absY, velocity) {
    // show loader
    // console.log(`Showing loader deltaX ${deltaX} deltaY ${deltaY} absX ${absX} absY ${absY} velocity ${velocity}`)
    this.setState({ loader: true, size: absY })
  }
  swiped(e, deltaX, deltaY, isFlick, velocity) {
    // console.log(`You swiped deltaX ${deltaX} deltaY ${deltaY} isFlick ${isFlick} velocity ${velocity}`)
  }
  swipingLeft(e, absX) {
    // console.log("You're Swiping to the Left...", e, absX)
  }
  swipedUp(e, deltaY, isFlick) {
    // console.log('You Swiped Up...', e, deltaY, isFlick)
  }
  swipedDown(e, deltaY, isFlick) {
    // start fetching new currency
    this.setState({ loader: false })
    console.log('Fetch currency...', e, deltaY, isFlick)
  }
  render() {
    const { loader, size } = this.state
    const showLoader = loader && size > 15
    return (
      <Swipeable
        onSwiping={this.swiping}
        // onSwiped={this.swiped}
        // onSwipingLeft={this.swipingLeft}
        // onSwipingRight={this.swipingRight}
        // onSwipedUp={this.swipedUp}
        onSwipedDown={this.swipedDown}
      >
        <div>
          {showLoader &&
            <div>
              loader {size}
            </div>}
          <Wrapper />
        </div>
      </Swipeable>
    )
  }
}
