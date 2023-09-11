import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './pages/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cities from './pages/Cities/Cities'
import LayoutMain from './pages/LayoutMain/LayoutMain'

const router = createBrowserRouter([
  {
    path: "/",
    // element: <LayoutMain><Home /></LayoutMain>,
    element: <LayoutMain />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/cities',
        element: <Cities />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
