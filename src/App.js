
import './App.css'
import Home from './Pages/Home/Home'

import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles
// ..
AOS.init()

function App() {

  return (
    <div>
      <Home />
    </div>
  )
}

export default App
