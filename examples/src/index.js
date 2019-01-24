/***  examples/src/index.js ***/
import React from 'react'
import { render } from 'react-dom'
import CSS_Reset from '../../src'

const App = () => (
  <CSS_Reset>
    <h1>The rest of your web content!</h1>
  </CSS_Reset>
)

render(<App />, document.getElementById('root'))
