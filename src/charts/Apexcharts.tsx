import { x, y } from 'data'
import type { FC } from 'react'
import Chart from 'react-apexcharts'

const Apexcharts: FC = () => {
  return (
    <Chart
      options={{
        chart: { id: 'basic-bar', toolbar: { show: false } },
        xaxis: { categories: x.map((item) => item.getHours()), range: 24, type: 'numeric' },
        grid: { xaxis: { lines: { show: true } }, yaxis: { lines: { show: false } } },
      }}
      series={[{ name: 'y', data: y }]}
      type='bar'
      width='500'
    />
  )
}

export default Apexcharts
