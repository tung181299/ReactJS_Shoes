import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageNotFound from 'containers/shared/PageNotFound/PageNotFound';
import { adminRoutes, clientRoutes, sharedRoutes } from 'routes';
import ClientLayout from 'layouts/ClientLayout';
import Login from 'containers/shared/Auth/Login/Login';
import AdminLayout from 'layouts/AdminLayout';
import SharedLayout from 'layouts/SharedLayout';
import Register from 'containers/shared/Auth/Register/Register';

function App() {
  const renderLayout = (routes, Layout) => {
    return routes.map(route => {
      const { path, component, exact, isPrivate } = route;
      return (
        <Layout
          path={path}
          component={component}
          exact={exact}
          isPrivate={isPrivate}
        />
      );
    });
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          {renderLayout(clientRoutes, ClientLayout)}
          {renderLayout(adminRoutes, AdminLayout)}
          {renderLayout(sharedRoutes, SharedLayout)}
          {/* <Route path="/" component={Login} /> */}
          {/* <Route path="/" component={Register} /> */}
          {/* <Route path="*" component={PageNotFound} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
