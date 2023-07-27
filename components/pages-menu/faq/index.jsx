import Breadcrumb from "../../common/Breadcrumb";
import FooterDefault from "../../footer/common-footer";
import DefaulHeader2 from "../../header/DefaulHeader2";
import MobileMenu from "../../header/MobileMenu";
import FaqChild from "./FaqChild";

const index = () => {
  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>


      <DefaulHeader2 />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      <Breadcrumb title="SSS" meta="SSS" />
      {/* <!--End Page Title--> */}

      <section className="faqs-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Sık Sorulan Sorular</h2>
            <div className="text">Anasayfa / SSS</div>
          </div>

          <h3>Ödemeler</h3>
          {/* <!--Accordian Box--> */}
          <ul className="accordion-box">
            <FaqChild />
          </ul>

          <h3>Öneriler</h3>
          {/* <!--Accordian Box--> */}
          <ul className="accordion-box mb-0">
            <FaqChild />
          </ul>
        </div>
      </section>
      {/* <!-- End Faqs Section --> */}

      <FooterDefault footerStyle="alternate5" />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
