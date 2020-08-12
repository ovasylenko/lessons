import React, { useEffect, useState } from 'react'
import { select, axisBottom, axisLeft, max, min } from 'd3'
import { scaleLinear, scaleTime } from 'd3-scale'

import source from './source.json'

const X_MARGIN = 20
const Y_MARGIN = 50

const DEFAULT_WIDTH = 1200
const DEFAULT_HEIGHT = 400

const data = source.map((it) => ({
  date: new Date(it.lastUpdatedAtSource),
  infected: it.infected,
  recovered: it.recovered
}))

const drawAxises = ({ width, height, field }) => {
  const getNewAxis = (cx) => select('#chart').append('g').attr('class', cx)

  const yAx = select('.y-axis')
  const xAx = select('.x-axis')

  const scaleY = scaleLinear()
    .domain([min(data.map((it) => it[field])), max(data.map((it) => it[field]))])
    .range([height - Y_MARGIN * 2, Y_MARGIN])

  const scaleX = scaleTime()
    .domain([new Date(min(data.map((it) => +it.date))), new Date(max(data.map((it) => +it.date)))])
    .range([X_MARGIN, width - X_MARGIN * 2])

  const YAxis = axisLeft().scale(scaleY)
  const XAxis = axisBottom()
    .scale(scaleX);


    (yAx.empty() ? getNewAxis('y-axis') : yAx).transition()
    .attr('transform', `translate(${2 * X_MARGIN}, ${Y_MARGIN})`)
    .call(YAxis);


 ;(xAx.empty() ? getNewAxis('x-axis') : xAx)
   .attr('transform', `translate(${X_MARGIN}, ${DEFAULT_HEIGHT - Y_MARGIN})`)
   .call(XAxis)
}

const drawLine = ({ width, height, field }) => {
  drawAxises({ width, height, field })
}

const Svg = () => {
  const [width] = useState(DEFAULT_WIDTH)
  const [height] = useState(DEFAULT_HEIGHT)
  const [field, toggle] = useState('infected')

  useEffect(() => {
    drawLine({ width, height, field })
  }, [field])
  return (
    <div>
      <div className="min-w-screen min-h-screen bg-gray-900 flex flex-wrap content-around justify-center px-5 py-5">
        <div className="bg-indigo-600 text-white rounded shadow-xl py-5 px-5 w-full lg:w-10/12 xl:w-3/4">
          <button
            type="button"
            onClick={() => {
              toggle(field === 'infected' ? 'recovered' : 'infected')
            }}
          >
            {field}
          </button>

          <div className="flex items-end">
            <svg width={width} height={height} id="chart" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Svg)
