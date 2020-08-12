import React, { useEffect, useState } from 'react'
import { select } from 'd3'
import { scaleLinear } from 'd3-scale'

const DEFAULT_WIDTH = 400
const DEFAULT_HEIGHT= 400

const drawLine = ({ width, height }) => {
  const scaleX = scaleLinear().domain([0, 20]).range([0, width])
  const scaleY = scaleLinear().domain([0, 20]).range([0, height])
  const gX = select('#chart').append('g')
  const gY = select('#chart').append('g')

  new Array(22).fill(0).forEach((it,index) => {
   gX.append('line')
     .attr('x1', scaleX(index))
     .attr('y1', 0)
     .attr('x2', scaleX(index))
     .attr('y2', scaleY(20))
     .attr('stroke', 'yellow')
     .attr('stroke-width', '1')

   gY.append('line')
     .attr('x1', scaleX(0))
     .attr('y1', scaleY(index))
     .attr('x2', scaleX(20))
     .attr('y2', scaleY(index))
     .attr('stroke', 'yellow')
     .attr('stroke-width', '1')

  })

  select('#chart')
    .append('circle')
    .attr('cx', scaleX(5))
    .attr('cy', scaleY(5))
    .attr('r', 50)
    .attr('stroke', 'red')
    .attr('stroke-width', '2')
    .attr('fill', 'red')

}

const Svg = () => {
  const [width] = useState(DEFAULT_WIDTH)
  const [height] = useState(DEFAULT_HEIGHT)

  useEffect(() => {
    drawLine({width, height})
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
