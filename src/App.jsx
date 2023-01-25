import { useState } from 'react'

import './css/app.css'
import Image from './component/Image'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Image />
    </div>
  )
}

export default App
