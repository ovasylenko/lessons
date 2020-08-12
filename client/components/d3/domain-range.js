import React, { useState } from 'react'
import { scaleLinear } from 'd3-scale'

const DomainRange = () => {
  const [minDomain, setMinDomain] = useState(0)
  const [maxDomain, setMaxDomain] = useState(100)
  const [minRange, setMinRange] = useState(0)
  const [maxRange, setMaxRange] = useState(100)
  const [domain, setDomain] = useState(0)

  const scale = scaleLinear().domain([minDomain, maxDomain]).range([minRange, maxRange])
  const scaleColor = scaleLinear()
    .domain([minDomain, (maxDomain - minDomain)/10, maxDomain])
    .range(['red', 'yellow', 'green'])

  return (
    <div>
      <div className="min-w-screen min-h-screen bg-gray-900 flex flex-wrap content-around justify-center px-5 py-5">
        <div className="bg-indigo-600 rounded shadow-xl py-5 px-5 w-full lg:w-10/12 xl:w-3/4">
          <div className="flex">
            <div className="flex flex-col ">
              <div className="flex my-5">
                <div className="w-32">Min Range</div>
                <div>
                  <input
                    value={minRange}
                    onChange={(ev) => {
                      setMinRange(+ev.target.value)
                    }}
                  />{' '}
                </div>
              </div>
              <div className="flex my-5 ">
                <div className="w-32">Max Range</div>
                <div>
                  {' '}
                  <input
                    value={maxRange}
                    onChange={(ev) => {
                      setMaxRange(+ev.target.value)
                    }}
                  />{' '}
                </div>
              </div>
              <div className="flex my-5 ">
                <div className="w-32">Min Domain</div>
                <div>
                  <input
                    value={minDomain}
                    onChange={(ev) => {
                      setMinDomain(+ev.target.value)
                    }}
                  />{' '}
                </div>
              </div>
              <div className="flex my-5 ">
                <div className="w-32">Max Domain</div>
                <div>
                  {' '}
                  <input
                    value={maxDomain}
                    onChange={(ev) => {
                      setMaxDomain(+ev.target.value)
                    }}
                  />{' '}
                </div>
              </div>
              <div className="flex my-5 ">
                <div className="w-32">Domain</div>
                <div>
                  {' '}
                  <input
                    value={domain}
                    onChange={(ev) => {
                      setDomain(+ev.target.value)
                    }}
                  />{' '}
                </div>
              </div>
            </div>{' '}
            <div className="flex flex-col flex-grow text-xl justify-center text-white items-center">
              <h1>{scale(domain)}</h1>
              <div className="flex">
                {new Array(10).fill(0).map((it, index) => {
                  return (
                    <div
                      key={index}
                      className=" h-10 w-10 mx-5 flex items-center justify-center"
                      style={{ backgroundColor: scaleColor(index * 10) }}
                    >
                      {' '}
                      {index * 10}{' '}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DomainRange
