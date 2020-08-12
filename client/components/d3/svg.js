import React from 'react'

const Svg = () => {
  return (
    <div>
      <div className="min-w-screen min-h-screen bg-gray-900 flex flex-wrap content-around justify-center px-5 py-5">
        <div className="bg-indigo-600 text-white rounded shadow-xl py-5 px-5 w-full lg:w-10/12 xl:w-3/4">
          <div className="flex items-end">
            {new Array(10).fill(0).map((it, index) => {
              return (
                <svg width={index * 10} key={index} height={index * 10} viewBox="0 0 448 512">
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M224 373.12c-25.24-31.67-40.08-59.43-45-83.18-22.55-88 112.61-88 90.06 0-5.45 24.25-20.29 52-45 83.18zm138.15 73.23c-42.06 18.31-83.67-10.88-119.3-50.47 103.9-130.07 46.11-200-18.85-200-54.92 0-85.16 46.51-73.28 100.5 6.93 29.19 25.23 62.39 54.43 99.5-32.53 36.05-60.55 52.69-85.15 54.92-50 7.43-89.11-41.06-71.3-91.09 15.1-39.16 111.72-231.18 115.87-241.56 15.75-30.07 25.56-57.4 59.38-57.4 32.34 0 43.4 25.94 60.37 59.87 36 70.62 89.35 177.48 114.84 239.09 13.17 33.07-1.37 71.29-37.01 86.64zm47-136.12C280.27 35.93 273.13 32 224 32c-45.52 0-64.87 31.67-84.66 72.79C33.18 317.1 22.89 347.19 22 349.81-3.22 419.14 48.74 480 111.63 480c21.71 0 60.61-6.06 112.37-62.4 58.68 63.78 101.26 62.4 112.37 62.4 62.89.05 114.85-60.86 89.61-130.19.02-3.89-16.82-38.9-16.82-39.58z"
                  />
                </svg>
              )
            })}
          </div>
        </div>

        <div className="bg-indigo-600 text-white rounded shadow-xl py-5 px-5 w-full lg:w-10/12 xl:w-3/4">
          <div className="flex items-end">
            <svg width="400" height="400">
              <g className="group-of-lines">
                {new Array(10).fill(0).map((it, index) => {
                  return (
                    <line
                      key={index}
                      x1={index * 20}
                      y1="0"
                      x2={index * 20}
                      y2="400"
                      stroke="white"
                    />
                  )
                })}
              </g>
              <line
                x1="0"
                y1="80"
                x2="100"
                y2="100"
                stroke="white"
              />
              <circle
                cx="100"
                cy="100"
                r="10"
                stroke="blue"
                strokeWidth="1"
                fill="yellow"
              />
              <path d="M 300 300 H 200 V 200 H 300 L 300 300" />
            </svg>
            <div>
              <div>M 300 300 H 200 V 200 H 300 L 300 300</div>
              <br />
              <h2>used for the path</h2>
              <p>M = moveto</p>
              <p>L = lineto</p>
              <p>H = horizontal lineto</p>
              <p>V = vertical lineto</p>
              <p>C = curveto</p>
              <p>S = smooth curveto</p>
              <p>Q = quadratic Bézier curve</p>
              <p>T = smooth quadratic Bézier curveto</p>
              <p>A = elliptical</p>
              <p>Arc Z = closepath</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Svg)
