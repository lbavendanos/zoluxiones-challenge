import { lazy } from 'react'
import { RouteComponentProps as BaseRouteComponentProps } from 'react-router'

interface RouteComponentProps extends BaseRouteComponentProps {
  routes?: RouteRecordRaw[]
}

export interface RouteRecordRaw {
  exact?: boolean
  path: string
  component: React.FC<RouteComponentProps>
  routes?: RouteRecordRaw[]
}

const routes: RouteRecordRaw[] = [
  {
    exact: true,
    path: '/',
    component: lazy(() => import('./pages/Home/Home')),
  },
  {
    path: '/register',
    component: lazy(() => import('./pages/Register/Register')),
  },
]

export default routes
