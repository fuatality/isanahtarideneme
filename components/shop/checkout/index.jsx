import FooterDefault from "../../footer/common-footer";
import MobileMenu from "../../header/MobileMenu";
import Breadcrumb from "../../../components/shop/Breadcrumb";
import BillingAll from "./components";
import ShopHeader from "../../header/ShopHeader";

const index = () => {
  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>


      <ShopHeader />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      <Breadcrumb title="Ödeme Sayfası" meta="Ödeme Sayfası" />
      {/* <!--End Page Title--> */}

      {/* <!--CheckOut Page--> */}
      <section className="checkout-page">
        <div className="auto-container">
          <BillingAll />
        </div>
      </section>
      {/* <!--End CheckOut Page--> */}

      <FooterDefault footerStyle="alternate5" />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
