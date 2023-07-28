import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderNavContent from "../header/HeaderNavContent";
import { useSelector } from 'react-redux'; // <-- Add this line

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const userRole = useSelector(state => state.user.role);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    // <!-- Main Header-->
    <header
      className={`main-header header-style-three -type-15 ${
        navbar ? "fixed-header animated slideInDown" : ""
      }`}
    >
      {/* <!-- Main box --> */}
      <div className="main-box">
        {/* <!--Nav Outer --> */}
        <div className="nav-outer">
          <div className="logo-box">
            <div className="logo">
              <Link href="/">
                <img src="/images/logo.png" alt="brand" height="100px" width="100px"/>
              </Link>
              <text>İş Anahtarı</text>
            </div>
          </div>
          {/* End .logo-box */}

          <HeaderNavContent />
          {/* <!-- Main Menu End--> */}
        </div>
        {/* End .nav-outer */}

        <div className="outer-box">
          {/* <!-- Login/Register --> */}
          <div className="btn-box">
            {userRole === 'admin' && (
              <Link
                href="/employers-dashboard/post-jobs"
                className="theme-btn btn-style-one"
              >
                İlan Ver
              </Link>
            )}
            {userRole === 'guest' &&( 
            <Link
              href="/login"
              className="theme-btn btn-style-four"
            >
              Giriş Yap / Üye Ol
            </Link> 
            )} 
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
