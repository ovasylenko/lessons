import React, { useEffect, useState } from 'react'
import { select, axisBottom } from 'd3'
import {scaleLinear} from 'd3-scale'

const X_MARGIN = 20
const Y_MARGIN = 50

const DEFAULT_WIDTH = 400
const DEFAULT_HEIGHT = 400
const [minDomain, maxDomain] = [0, 1000]

const drawLine = ({width}) => {
  const scale = scaleLinear()
    .domain([minDomain, maxDomain])
    .range([X_MARGIN, width - X_MARGIN * 2])
  const xAxis = axisBottom().scale(scale)

  select('#chart')
    .append('g')
    .attr('transform', `translate(${X_MARGIN}, ${DEFAULT_HEIGHT/2 - Y_MARGIN})`)
    .call(xAxis)
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
