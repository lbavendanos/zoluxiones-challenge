import { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes, { RouteRecordRaw } from './routes'
import Navbar from './components/Navbar/Navbar'

function RouteWithSubRoutes(route: RouteRecordRaw) {
  return (
    <Route
      exact={route.exact}
      path={route.path}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  )
}

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="main" data-testid="main">
          <Suspense fallback={<div></div>}>
            <Switch>
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
            </Switch>
          </Suspense>
        </main>
      </div>
    </Router>
  )
}
