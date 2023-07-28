import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderNavContent from "./HeaderNavContent";
import { useSelector } from 'react-redux';


const DefaulHeader2 = () => {
  const [navbar, setNavbar] = useState(false);
  const userRole = useSelector((state) => state.user.role);


  const changeBackground = () => {
    if (window.scrollY >= 0) {
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
      className={`main-header  ${
        navbar ? "fixed-header" : ""
      }`}
    >
      {/* <!-- Main box --> */}
      <div className="main-box">
        {/* <!--Nav Outer --> */}
        <div className="nav-outer">
          <div className="logo-box">
            <div className="logo">
              <Link href="/">
                <img src="/images/logo.png" alt="brand" height="50px" width="50px"/>
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
          {/* <!-- Add Listing --> */}
          {userRole === 'user' &&(
          <Link href="/candidates-dashboard/cv-manager" className="upload-cv">
            CV Yükle
          </Link>
          )}
          {/* <!-- Login/Register --> */}
          <div className="btn-box">
            {userRole === 'admin' &&(
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

export default DefaulHeader2;
