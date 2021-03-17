import React, { useEffect } from 'react'

import { app, rootContainer as rootContainerClassName } from './app.module.less'

import WebGl from '../webgl/hello'

export namespace Bootstrap {
  export type Prop = {
    rootContainer: HTMLElement
  }
}

export default function Bootstrap({ rootContainer }: Bootstrap.Prop) {
  useEffect(() => {
    document.documentElement.classList.add(app)
    rootContainer.classList.add(rootContainerClassName)
    return () => {
      document.documentElement.classList.remove(app)
      rootContainer.classList.remove(rootContainerClassName)
    }
  }, [])
  return <WebGl />
}