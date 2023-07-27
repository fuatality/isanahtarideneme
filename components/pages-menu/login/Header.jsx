import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderNavContent from "../../header/HeaderNavContent";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

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

        
      </div>
    </header>
  );
};

export default Header;
