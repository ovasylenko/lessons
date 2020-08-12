import React, { useEffect, useState } from 'react'
import {
  select,
  line,
  // curveLinear,
  curveBasis,
  curveCardinal,
  curveMonotoneX,
  curveCatmullRom,
  // curveStepBefore,
  // curveStepAfter,
  // curveStep
} from 'd3'

const curveArray = [
  // { d3Curve: curveLinear, color: 'red' },
  // { d3Curve: curveStep, color: 'yellow' },
  // { d3Curve: curveStepBefore, color: 'green' },
  // { d3Curve: curveStepAfter, color: 'pink' },
  { d3Curve: curveBasis, color: 'purple' },
  { d3Curve: curveCardinal, color: 'orange' },
  { d3Curve: curveMonotoneX, color: 'blue' },
  { d3Curve: curveCatmullRom, color: 'grey' }
]

const DEFAULT_WIDTH = 400
const DEFAULT_HEIGHT = 400

const lineData = [
  { x: 1, y: 5 },
  { x: 20, y: 20 },
  { x: 40, y: 10 },
  { x: 60, y: 40 },
  { x: 80, y: 5 },
  { x: 100, y: 60 }
]

const drawLine = () => {
  curveArray.forEach(({ d3Curve, color }) => {
    const chartline = line()
      .curve(d3Curve)
      .x((d) => 5 * d.x)
      .y((d) => 5* d.y)
    select('#chart')
      .append('path')
      .datum(lineData)
      .attr('stroke', color)
      .attr('stroke-width', '2.5')
      .attr('fill', 'none')

      .attr('d', chartline)
  })
}

const Svg = () => {
  const [width] = useState(DEFAULT_WIDTH)
  const [height] = useState(DEFAULT_HEIGHT)

  useEffect(() => {
    drawLine({ width, height })
  }, [])
  return (
    <div>
      <div className="min-w-screen min-h-screen bg-gray-900 flex flex-wrap content-around justify-center px-5 py-5">
        <div className="bg-indigo-600 text-white rounded shadow-xl py-5 px-5 w-full lg:w-10/12 xl:w-3/4">
          <div className="flex items-end">
            <svg width={width} height={height} id="chart" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Svg)
