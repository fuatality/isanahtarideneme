import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/index.scss";
import { useEffect } from "react";
import ScrollToTop from "../components/common/ScrollTop";
import { Provider } from "react-redux";
import { store } from "../app/store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import axios from 'axios';
import Cookies from 'js-cookie';
import { setRole } from "../features/user/userSlice";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

function MyApp({ Component, pageProps }) {
  // aos animation activation

  useEffect(() => {
    Aos.init({
      duration: 1400,
      once: true,
    });

    // Set up axios to include the JWT in the Authorization header of future requests
    axios.defaults.headers.common['Authorization'] = `Bearer ${Cookies.get('jwt')}`;
    const userRole = Cookies.get('userRole');
    if (userRole) {
      store.dispatch(setRole(userRole));
    }
  }, []);

  return (
    <Provider store={store}>
      <div className="page-wrapper">
        <Component {...pageProps} />

        {/* Toastify */}
        <ToastContainer
          position="bottom-right"
          autoClose={500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        {/* <!-- Scroll To Top --> */}
        <ScrollToTop />
      </div>
    </Provider>
  );
}

export default MyApp;
