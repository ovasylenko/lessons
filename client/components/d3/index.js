import React from 'react'
import { Switch, Route } from 'react-router-dom'

import SVGLesson from './svg'
import DomainRange from './domain-range'
import LineCircle from './line-circle'
import Interpolation from './interpolation'
import Axises from './axises'
import EnterExitUpdate from './enter-update-exit'
import TwoAxises from './TwoAxises'

import Head from '../head'

const Svg = () => {
  return (
    <div>
      <Head title="SVG" />
      <Switch>
        <Route exact path="/lessons/d3/enter-update-exit" component={() => <EnterExitUpdate />} />
        <Route exact path="/lessons/d3/svg" component={() => <SVGLesson />} />
        <Route exact path="/lessons/d3/domain-range" component={() => <DomainRange />} />
        <Route exact path="/lessons/d3/line-circle" component={() => <LineCircle />} />
        <Route exact path="/lessons/d3/interpolation" component={() => <Interpolation />} />
        <Route exact path="/lessons/d3/axises" component={() => <Axises />} />
        <Route exact path="/lessons/d3/two-axises" component={() => <TwoAxises />} />
      </Switch>
    </div>
  )
}

export default Svg
