import CopyrightFooter from "./CopyrightFooter";
import FooterContent4 from "../FooterContent4";
import { bottom, left, right } from "@popperjs/core";

const index = ({ footerStyle = "" }) => {
  return (
    <footer className={`main-footer ${footerStyle}`} style={{ backgroundImage: "url(images/index-15/header/14.svg)" ,backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: right}} >
      <div className="auto-container">
        {/* <!--Widgets Section--> */}
        <div className="widgets-section" data-aos="fade-up">
          <div className="row">
            {/*<div className="big-column col-xl-4 col-lg-3 col-md-12" >
              <div className="footer-column about-widget" >
                <div className="logo">
                  <a href="#" >
                    <img src="/images/logo.png" alt="brand" />
                  </a>
                </div>
                {/*<p className="phone-num">
                  <span>Call us </span>
                  <a href="thebeehost@support.com">123 456 7890</a>
                </p>
                <p className="address">
                  Ataşehir, Istanbul
                  <br /> 34000, Türkiye. <br />
                  <a href="mailto:help@isanahtari.com" className="email">
                    help@isanahtari.com
                  </a>
                </p>*/}
            {/*  </div>
            </div>
            {/* End footer left widget */}

            <div className="big-column col-xl-16 col-lg-12 col-md-12">
              <div className="row">
                <FooterContent4 />
              </div>
            </div>
            {/* End col-xl-8 */}
          </div>
        </div>
      </div>
      {/* End auto-container */}

      <CopyrightFooter />
      {/* <!--Bottom--> */}
    </footer>
    /* <!-- End Main Footer --> */
  );
};

export default index;
