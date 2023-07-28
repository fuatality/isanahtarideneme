import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Breadcrumb from "../../common/Breadcrumb";
import FooterDefault from "../../footer/common-footer";
import DashboardHeader from '../../header/DashboardHeader';
import MobileMenu from "../../header/MobileMenu";
import Pricing from "../../pricing/Pricing";

const PricingPage = () => {
  const router = useRouter();
  const userRole = useSelector((state) => state.user.role);  // Use useSelector to access the user role from the Redux store

  useEffect(() => {
    // If the user's role is not 'admin', redirect them to their own dashboard
    if (userRole !== 'admin') {
      router.push(`/`);
    }
  }, [userRole]);

  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      <DashboardHeader />
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

export default PricingPage;
