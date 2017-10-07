/* global window, document */

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
const keys = { 37: 1, 38: 1, 39: 1, 40: 1 }

function preventDefault(e) {
  e = e || window.event // eslint-disable-line
  if (e.preventDefault) e.preventDefault()
  e.returnValue = false
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e)
    return false
  }
  return undefined
}

export function disableScroll() {
  console.log('disableScroll')
  if (
    window.addEventListener // older FF
  ) {
    window.addEventListener('DOMMouseScroll', preventDefault, false)
  }
  window.onwheel = preventDefault // modern standard
  document.onmousewheel = preventDefault // older browsers, IE
  window.onmousewheel = document.onmousewheel // older browsers, IE
  window.ontouchmove = preventDefault // mobile
  document.onkeydown = preventDefaultForScrollKeys
}

export function enableScroll() {
  if (window.removeEventListener) {
    window.removeEventListener('DOMMouseScroll', preventDefault, false)
  }
  document.onmousewheel = null
  window.onmousewheel = document.onmousewheel
  window.onwheel = null
  window.ontouchmove = null
  document.onkeydown = null
}
