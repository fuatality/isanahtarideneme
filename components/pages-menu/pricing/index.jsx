import Breadcrumb from "../../common/Breadcrumb";
import FooterDefault from "../../footer/common-footer";
import DefaulHeader2 from "../../header/DefaulHeader2";
import MobileMenu from "../../header/MobileMenu";
import Pricing from "../../pricing/Pricing";

const index = () => {
  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>


      <DefaulHeader2 />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      <Breadcrumb title="Ücretler" meta="Ücretler" />
      {/* <!--End Page Title--> */}

      <section className="pricing-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Ücret Paketler</h2>
            <div className="text">
              Size en uygun olan paketi seçin.
            </div>
          </div>
          {/* End title */}
          <Pricing />
          {/* End .{/* <!--Pricing Tabs--> */}
        </div>
      </section>
      {/* <!-- End Pricing Section --> */}

      <FooterDefault footerStyle="alternate5" />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
