import React, { StrictMode } from 'react'
import { render } from 'react-dom'

import Examples from './examples'

const Demo = () => (
  <div>
    <h1>react-mentions-extended</h1>
    <p>
      <span role="img" aria-labelledby="yay!">
        🙌
      </span>
      &nbsp; brought to you by Signavio, docs and code on Github:{' '}
      <a href="https://github.com/Conversations-LazTech/react-mentions">
        https://github.com/Conversations-LazTech/react-mentions
      </a>{' '}
      (BSD license)
    </p>
    <StrictMode>
      <Examples />
    </StrictMode>
  </div>
)

render(<Demo />, document.querySelector('#demo'))
