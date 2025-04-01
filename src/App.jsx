import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/sections";
import ContactUs from "./pages/contact Us/ContactUs";
import NewsPage from "./pages/home/sections/NewsPage";
import RoomDetails from "./pages/roomDetail/RoomDetails";
import ChatButtons from "./components/ChatButtons";
import ConferenceFacilitiesDetail from "./pages/facilities/ConferenceFacilitiesDetail";
import BarsRestaurantsDetail from "./pages/facilities/BarsRestaurantsDetail.jsx";
import EntertainmentEventsDetail from "./pages/facilities/EntertainmentEventsDetail.jsx";
import RoomsPage from "./pages/roomsPage/RoomsPage.jsx";
import RootLayout from "./layout/RootLayout.jsx";
// import AboutUs from "./pages/about Us/AboutUs.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "contactus",
          element: <ContactUs />,
        },

        {
          path: "entertainment-events",
          element: <EntertainmentEventsDetail />,
        },

        {
          path: "bar-restaurants",
          element: <BarsRestaurantsDetail />,
        },

        {
          path: "news",
          element: <NewsPage />,
        },

        {
          path: "rooms/:id",
          element: <RoomDetails />,
        },

        {
          path: "conference-facilities",
          element: <ConferenceFacilitiesDetail />,
        },

        {
          path: "rooms",
          element: <RoomsPage />,
        },

        // {
        //   path: "about",
        //   element: <AboutUs />,
        // },
      ],
    },
  ]);

  return (
    <div>
      {/* RouterProvider handles routing */}
      <RouterProvider router={router} />

      {/* ChatButtons are globally available */}
      <ChatButtons />
    </div>
  );
}

export default App;
