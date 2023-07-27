
import Register from "../../common/form/register/Register";
import DefaulHeader2 from "../../header/DefaulHeader2";
import MobileMenu from "../../header/MobileMenu";
import Header from "./Header";

const index = () => {
  return (
    <>
      <DefaulHeader2 />
      {/* <!--End Main Header -->  */}

      <MobileMenu />
      {/* End MobileMenu */}

      <div className="login-section">
        <div
          className="image-layer"
          style={{ backgroundImage: "url(images/background/12.jpg)" }}
        ></div>
        <div className="outer-box">
          {/* <!-- Login Form --> */}
          <div className="login-form default-form">
            <Register />
          </div>
          {/* <!--End Login Form --> */}
        </div>
      </div>
      {/* <!-- End Info Section --> */}
    </>
  );
};

export default index;
