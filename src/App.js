import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import MainContainer from "./components/MainContainer";
import { WatchPage } from "./components/WatchPage";
import Body from './components/Body'

const routes = createBrowserRouter([
  {
    path: "",
    element: <Home />,
    children: [
      {
        path: "",
        element: <MainContainer />,
        children: [
          {
            path: "",
            element: <Body />,
          },
          {
            path:'/watch',
            element:<WatchPage />
          }
        ],
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
