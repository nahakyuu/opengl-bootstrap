import React, { useEffect, useRef } from 'react'

import vsSource from './vs.shader.glsl'
import fsSource from './fs.shader.glsl'

import { drawScene, initBuffers, initShaderProgram, PprogramInfoType } from './utils'

export default function Hello1() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const gl = canvasRef.current!.getContext("webgl")!

    gl.clearColor(0.0, 0.0, 0.0, 1.0)  // Clear to black, fully opaque
    gl.clearDepth(1.0)                 // Clear everything
    gl.enable(gl.DEPTH_TEST)           // Enable depth testing
    gl.depthFunc(gl.LEQUAL)            // Near things obscure far things

    // Clear the canvas before we start drawing on it.

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

    const shaderProgram = initShaderProgram(gl, vsSource, fsSource)
    const programInfo: PprogramInfoType = {
      program: shaderProgram,
      attribLocations: {
        vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
        vertexColor: gl.getAttribLocation(shaderProgram, 'aVertexColor'),
      },
      uniformLocations: {
        projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix')!,
        modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix')!,
      },
    }

    const buffer = initBuffers(gl)
    drawScene(gl, programInfo, buffer)
  }, [])
  return <canvas ref={canvasRef} width="640" height="480"></canvas>
}