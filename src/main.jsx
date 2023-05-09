import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CreateCoffee from './components/CreateCoffee.jsx'
import Coffees from './components/Coffees.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/create-coffee',
        element: <CreateCoffee></CreateCoffee>
      },
      {
        path: '/coffees',
        element: <Coffees></Coffees>,
        loader: ()=> fetch('http://localhost:9988/coffees')
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
