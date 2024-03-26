import Navbar from './Components/Navbar/Navbar'
import Layout from './Components/routes/loyaut/layout'
import HomePage from './Components/routes/homePage/homePage'
import ListPage from './Components/routes/listPage/listPage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Singlepage from './Components/routes/Singlepage/Singlepage'

export default function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Layout />,
      children:[
        {
          path:'/',
          element:<HomePage/>
        },
        {
          path:'/list',
          element:<ListPage/>
        },
        {
          path:'/:id',
          element:<Singlepage/>
        }
      ]
    }
  ]);

  return (
    
    <RouterProvider router={router} />
  )
}