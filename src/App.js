import Header from "./components/Header";
import Restaurants from "./components/Restaurants";
import Footer from "./components/Footer";
import Error from "./components/Error";
import { Outlet, createBrowserRouter } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import { store } from "./utils/store";
import { lazy, Suspense, useEffect, useState } from "react";
import UserContext from "./utils/UserContext";
import Cart from "./components/Cart";

const AboutUs = lazy(() => import("./components/AboutUs"));
const ContactUs = lazy(() => import("./components/ContactUs"));

const App = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    setCurrentUser({
      name: "Akbar hussain Sabri",
      email: "hussain.akbarsabri@gmail.com",
    });
  }, []);

  return (
    <Provider store={store}>
      <UserContext.Provider
        value={{ currentUser: currentUser, setCurrentUser }}
      >
        <div className="mx-32">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Restaurants />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <ContactUs />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:restaurantId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

export { appRouter };
export default App;
