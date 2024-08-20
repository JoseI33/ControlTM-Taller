import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import Signin from '../Sigin'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/signin', element: <Signin /> },
  ])

  return routes

}

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}


export default App
