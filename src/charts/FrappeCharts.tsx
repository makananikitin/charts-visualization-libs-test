import type { FC } from 'react'
import ReactFrappeChart from 'react-frappe-charts'

const FrappeCharts: FC = () => {
  return (
    <ReactFrappeChart
      axisOptions={{ xAxisMode: 'tick', yAxisMode: 'tick', xIsSeries: 1 }}
      colors={['#21ba45']}
      data={{
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{ values: [18, 40, 30, 35, 8, 52, 17, 4] }],
      }}
      height={250}
      type='bar'
    />
  )
}

export default FrappeCharts
