import { RouteObject, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from '../pages/Home';
import { EditEmployee } from '../pages/EditEmployee';
import { NotFound } from '../pages/NotFound';
import { Path } from '../shared/paths';
import { AddEmployee } from '../pages/AddEmployee';

const routesPublic: RouteObject[] = [
  {
    path: Path.ROOT,
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: Path.EDIT,
    element: <EditEmployee />,
    errorElement: <NotFound />,
  },
  {
    path: Path.ADD,
    element: <AddEmployee />,
    errorElement: <NotFound />,
  },
];

const routes = createBrowserRouter([...routesPublic]);

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <main className="root">{children}</main>;
};

export const Router = () => {
  return (
    <Layout>
      <RouterProvider router={routes} />
    </Layout>
  );
};
