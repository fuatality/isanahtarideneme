import LoginPopup from "../../common/form/login/LoginPopup";
import Partner from "../../common/partner/Partner";
import FooterDefault from "../../footer/common-footer";
import DefaulHeader2 from "../../header/DefaulHeader2";
import MobileMenu from "../../header/MobileMenu";
import ImgBox from "./ImgBox";
import IntroDescriptions from "./IntroDescriptions";
import CallToAction2 from "../../call-to-action/CallToAction2";
import Breadcrumb from "../../common/Breadcrumb";

const index = () => {
  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      <LoginPopup />
      {/* End Login Popup Modal */}

      <DefaulHeader2 />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      <Breadcrumb title="Hakkımızda" meta="Hakkımızda" />
      {/* <!--End Page Title--> */}

      <CallToAction2 />
      {/* <!-- End CallToAction2 --> */}

      <section className="clients-section">
        <div className="sponsors-outer" data-aos="fade">
          {/* <!--Sponsors Carousel--> */}
          <ul className="sponsors-carousel">
            <Partner />
          </ul>
        </div>
      </section>
      {/* <!-- End Clients Section--> */}

      <FooterDefault />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
