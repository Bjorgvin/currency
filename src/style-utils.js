// style-utils.js
import { css } from 'styled-components'

// eslint-disable-next-line
export const media = {
  handheld: (...args) => css`
    @media (max-width: 420px) {
      ${css(...args)}
    }
  `,
}
