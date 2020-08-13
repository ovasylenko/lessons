import React, { useEffect, useState } from 'react'
import { select, axisBottom, axisLeft, max, min, line, curveCardinal } from 'd3'
import { scaleLinear, scaleTime } from 'd3-scale'

import source from './source.json'

const X_MARGIN = 20
const Y_MARGIN = 50

const DEFAULT_WIDTH = 1000
const DEFAULT_HEIGHT = 400

const dataset = source
  .filter((it) => it.recovered !== '')
  .map((it) => ({
    date: new Date(it.lastUpdatedAtSource),
    infected: +it.infected,
    recovered: +it.recovered
  }))
  .filter((it) => !Number.isNaN(it.recovered) && !Number.isNaN(it.infected))

const drawLine = ({ width, height, field, setSelected }) => {
  const getNewAxis = (cx) => select('#chart').append('g').attr('class', cx)

  const scaleY = scaleLinear()
    .domain([min(dataset.map((it) => it[field])), max(dataset.map((it) => it[field]))])
    .range([height - Y_MARGIN * 2, Y_MARGIN])

  const scaleX = scaleTime()
    .domain([min(dataset.map((it) => +it.date)), max(dataset.map((it) => +it.date))])
    .range([2 * X_MARGIN, width - 2 * X_MARGIN])

  const yAx = select('.y-axis')
  const xAx = select('.x-axis')

  const YAxis = axisLeft().scale(scaleY)
  const XAxis = axisBottom().scale(scaleX)

  ;(yAx.empty() ? getNewAxis('y-axis') : yAx)
    .transition()
    .attr('transform', `translate(${2 * X_MARGIN}, ${Y_MARGIN})`)
    .call(YAxis)
  ;(xAx.empty() ? getNewAxis('x-axis') : xAx)
    .attr('transform', `translate(${0}, ${height - Y_MARGIN})`)
    .call(XAxis)

  const chartline = line()
    .curve(curveCardinal)
    .x((d) => scaleX(d.date))
    .y((d) => scaleY(d[field]))

  const chartPath = select('.path')
  ;(chartPath.empty() ? select('#chart').append('path').attr('class', 'path') : chartPath)
    .datum(dataset)
    .attr('stroke', 'white')
    .attr('stroke-width', '1')
    .attr('fill', 'none')
    .transition()
    .attr('d', chartline)

  const selection = select('#chart').selectAll('.point').data(dataset)

  selection
    .enter()
    .append('circle')
    .attr('class', 'point')
    .attr('fill', 'yellow')
    .attr('r', '1')
    .attr('cx', (d) => scaleX(d.date))
    .attr('cy', (d) => scaleY(d[field]))

  selection
    .transition()
    .attr('cx', (d) => scaleX(d.date))
    .attr('cy', (d) => scaleY(d[field]))

  selection.exit().remove()




  const selectionShadow = select('#chart').selectAll('.point-shadow').data(dataset)

  selectionShadow
    .enter()
    .append('circle')
    .attr('class', 'point-shadow')
    .attr('opacity', '0')
    .attr('r', '3')
    .attr('cx', (d) => scaleX(d.date))
    .attr('cy', (d) => scaleY(d[field]))
    .on('mouseover', (d) => {
      setSelected(d)
    })

  selectionShadow
    .transition()
    .attr('cx', (d) => scaleX(d.date))
    .attr('cy', (d) => scaleY(d[field]))

  selectionShadow.exit().remove()
}

const Svg = () => {
  const [width] = useState(DEFAULT_WIDTH)
  const [height] = useState(DEFAULT_HEIGHT)
  const [field, toggle] = useState('infected')
  const [selected, setSelected] = useState({})

  useEffect(() => {
    drawLine({ width, height, field, setSelected })
  }, [width, height, field, setSelected])
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
          {JSON.stringify(selected)}
          <div className="flex items-end">
            <svg width={width} height={height} id="chart" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Svg)
