/* eslint max-len: ["error", { "comments": 650 }] */
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
    // eslint-disable-next-line
    console.log(
      // eslint-disable-next-line
      `Showing loader deltaX ${deltaX} deltaY ${deltaY} absX ${absX} absY ${absY} velocity ${velocity}`,
    )
    this.setState({ loader: true, size: absY })
  }
  // eslint-disable-next-line
  swiped(e, deltaX, deltaY, isFlick, velocity) {
    // eslint-disable-next-line
    console.log(
      // eslint-disable-next-line
      `You swiped deltaX ${deltaX} deltaY ${deltaY} isFlick ${isFlick} velocity ${velocity}`, // eslint-disable-line
    )
  }
  // eslint-disable-next-line
  swipingLeft(e, absX) {
    // eslint-disable-next-line
    console.log("You're Swiping to the Left...", e, absX)
  }
  // eslint-disable-next-line
  swipedUp(e, deltaY, isFlick) {
    // eslint-disable-next-line
    console.log('You Swiped Up...', e, deltaY, isFlick)
  }
  // eslint-disable-next-line
  swipedDown(e, deltaY, isFlick) {
    // eslint-disable-next-line
    console.log('Fetch currency...', e, deltaY, isFlick)
    this.setState({ loader: false })
    // eslint-disable-next-line
    console.log('the user is pulling down ... we should fetch')
  }

  render() {
    const { loader, size } = this.state
    const showLoader = false // loader && size > 15
    return (
      <Swipeable /* onSwiping={this.swiping} */>
        <div>
          {showLoader &&
            <div>
              loader {loader}:{size}
            </div>}
          <Wrapper />
        </div>
      </Swipeable>
    )
  }
}
