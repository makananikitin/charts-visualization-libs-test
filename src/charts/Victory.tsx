import { x, y } from 'data'
import type { FC } from 'react'
import { VictoryAxis, VictoryBar, VictoryChart, VictoryScatter } from 'victory'

const Victory: FC = () => {
  const localData: { x: number; y: number }[] = x.map((xv, xi) => ({ x: xv.getHours(), y: y[xi] }))

  return (
    <VictoryChart domainPadding={24}>
      <VictoryAxis tickValues={x.map((item) => item.getHours())} />
      <VictoryAxis dependentAxis tickValues={y} />
      <VictoryBar
        barWidth={1}
        data={x.map((xv, xi) => ({ x: xv.getHours(), y: Math.max(...y) }))}
        style={{
          data: { fill: '#aaaaaa', strokeWidth: 0 },
        }}
      />
      <VictoryScatter
        data={localData}
        style={{
          data: { fill: '#e2e511', stroke: '#000', strokeWidth: '1px' },
        }}
      />
    </VictoryChart>
  )
}

export default Victory
