import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import FormContent from "../../common/form/login/FormContent";
import MobileMenu from "../../header/MobileMenu";
import DefaulHeader2 from "../../header/DefaulHeader2";

const LoginPage = () => {
  const router = useRouter();
  const userRole = useSelector((state) => state.user.role);  // Use useSelector to access the user role from the Redux store

  useEffect(() => {
    // If the user's role is not 'guest', redirect them to their own dashboard
    if (userRole !== 'guest') {
      router.push(`/`);
    }
  }, [userRole]);

  return (
    <>
      <DefaulHeader2 />
      {/* <!--End Main Header --> */}

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
            <FormContent />
          </div>
          {/* <!--End Login Form --> */}
        </div>
      </div>
      {/* <!-- End Info Section --> */}
    </>
  );
};

export default LoginPage;
