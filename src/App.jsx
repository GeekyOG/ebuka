import { RouterProvider } from "react-router-dom";
import router from "./routes";
import Providers from "./utils/Provider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Providers>
        <RouterProvider router={router} />
        <ToastContainer />
      </Providers>
    </>
  );
}

export default App;
