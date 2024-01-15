import type { FC, ReactNode } from 'react'
import { useState } from 'react'
import './App.scss'
import Victory from 'charts/Victory'
import Apexcharts from 'charts/Apexcharts'
import Recharts from 'charts/Recharts'
import ReactVis from 'charts/ReactVis'
import FrappeCharts from 'charts/FrappeCharts'

type Lib = 'victory' | 'apexcharts' | 'recharts' | 'react-vis' | 'frappe-charts'
const libs: Lib[] = ['recharts', 'victory', 'react-vis', 'apexcharts', 'frappe-charts']

const components: Map<Lib, ReactNode> = new Map([
  ['victory', <Victory />],
  ['apexcharts', <Apexcharts />],
  ['recharts', <Recharts />],
  ['react-vis', <ReactVis />],
  ['frappe-charts', <FrappeCharts />],
])

const App: FC = () => {
  const [lib, setLib] = useState<Lib>('recharts')

  return (
    <div className='app'>
      <div className='app__header'>
        {libs.map((item) => (
          <button
            className={item === lib ? 'app__item_active' : 'app__item_inactive'}
            key={item}
            onClick={() => {
              setLib(item)
            }}
          >
            {item}
          </button>
        ))}
      </div>
      <div className='app__content'>{components.get(lib)}</div>
    </div>
  )
}

export default App
