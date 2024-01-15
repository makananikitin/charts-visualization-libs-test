import { x, y } from 'data'
import type { FC } from 'react'
import { Bar, BarChart, LabelList, XAxis, YAxis } from 'recharts'

const renderCustomizedLabel = (props: any) => {
  const { x, y, width } = props
  const radius = 8

  return (
    <circle cx={x + width / 2} cy={y} fill='#e2e511' r={radius} stroke='#000' strokeWidth='2' />
  )
}

const Recharts: FC = () => {
  const localData = x.map((xv, xi) => ({
    name: 'bar' + xi,
    x: xv.getHours(),
    y: y[xi],
  }))

  return (
    <BarChart data={localData} height={400} width={800}>
      <XAxis
        dataKey='x'
        domain={['dataMin', 'dataMax']}
        padding={{ left: 30, right: 10 }}
        scale='linear'
        style={{ fontFamily: 'sans-serif' }}
        tickMargin={6}
        tickSize={0}
        type='number'
      />
      <YAxis
        dataKey='y'
        padding={{ top: 30, bottom: 30 }}
        scale='linear'
        style={{ fontFamily: 'sans-serif' }}
        tickMargin={6}
        type='number'
      />
      <Bar
        background={{ fill: '#aaaaaa' }}
        barSize={2}
        dataKey='y'
        fill='#00000000'
        isAnimationActive={false}
      >
        <LabelList content={renderCustomizedLabel} />
      </Bar>
    </BarChart>
  )
}

export default Recharts
