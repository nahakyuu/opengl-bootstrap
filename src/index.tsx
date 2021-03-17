import React from 'react'
import ReactDOM from 'react-dom'

import Bootstrap from './bootstrap'

const rootContainerElement = document.createElement('div')
document.body.append(rootContainerElement)

ReactDOM.render(<Bootstrap rootContainer={rootContainerElement} />, rootContainerElement)
