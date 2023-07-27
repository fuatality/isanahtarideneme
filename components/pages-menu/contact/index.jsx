
import FooterDefault from "../../footer/common-footer";
import DefaulHeader2 from "../../header/DefaulHeader2";
import MobileMenu from "../../header/MobileMenu";
import Address from "./Address";
import ContactForm from "./ContactForm";
import MapBox from "./MapBox";

const index = () => {
  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>


      <DefaulHeader2 />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      <section className="map-section">
        <div className="map-outer">
          <MapBox />
        </div>
      </section>
      {/* <!-- End Map Section --> */}

      <section className="contact-section">
        <div className="auto-container">
          <div className="upper-box">
            <div className="row">
              <Address />
            </div>
            {/* End .row */}
          </div>
          {/* End upperbox */}

          {/* <!-- Contact Form --> */}
          <div className="contact-form default-form">
            <h3>Mesajınızı Yazın</h3>
            <ContactForm />
            {/* <!--Contact Form--> */}
          </div>
          {/* <!--End Contact Form --> */}
        </div>
      </section>
      {/* <!-- Contact Section --> */}

      <FooterDefault footerStyle="alternate5" />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
