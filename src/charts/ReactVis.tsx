import { x, y } from 'data'
import type { FC } from 'react'
import {
  HorizontalGridLines,
  MarkSeries,
  VerticalBarSeries,
  VerticalGridLines,
  XAxis,
  XYPlot,
  YAxis,
} from 'react-vis'

const ReactVis: FC = () => {
  const localData: { x: number; y: number }[] = x.map((xv, xi) => ({ x: xv.getHours(), y: y[xi] }))

  return (
    <XYPlot height={600} width={600}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <YAxis />
      <VerticalBarSeries
        barWidth={0.02}
        color='#aaaaaa'
        data={x.map((xv, xi) => ({ x: xv.getHours(), y: Math.max(...y) }))}
      />
      <MarkSeries color='#e2e511' data={localData} stroke='#000' strokeWidth={1} />
    </XYPlot>
  )
}

export default ReactVis
