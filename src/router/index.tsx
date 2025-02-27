import {
  createBrowserRouter as createRouter,
  Navigate,
  type RouteObject,

} from 'react-router-dom'
import Home from '../views/home'
import Models from '../views/models'
import Creative from '../views/creative'
import Community from '../views/community'
import News from '../views/news'

const routes: RouteObject[] = [
  {
    path:'/',
    element: <Navigate to='/home' />
  },
  {
    path:'/home',
    element: <Home />
  },
  {
    path:'/models',
    element: <Models />
  },
  {
    path:'/creative',
    element:<Creative />
  },
  {
    path:'/community',
    element:<Community />
  },
  {
    path:'/news',
    element: <News />
  }
]

const router = createRouter(routes)

export default router
