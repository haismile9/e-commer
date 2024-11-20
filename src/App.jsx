
import { Outlet } from 'react-router-dom'
import './App.css'
import MyNavItems from './components/MyNavItems'

function App() {
  

  return (
    <>
      <MyNavItems></MyNavItems>
      <Outlet/>
    </>
  )
}

export default App
