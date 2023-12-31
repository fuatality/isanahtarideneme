
import FooterDefault from "../../footer/common-footer";
import DefaulHeader2 from "../../header/DefaulHeader2";
import MobileMenu from "../../header/MobileMenu";
import TermsText from "./TermsText";
import DashboardCandidatesHeader from "../../header/DashboardCandidatesHeader";
import DashboardHeader from "../../header/DashboardHeader";
import { useSelector } from 'react-redux';

const index = () => {
  const userRole = useSelector((state) => state.user.role);
  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      {userRole === 'user' ? <DashboardCandidatesHeader /> : userRole === 'admin' ? <DashboardHeader /> : <DefaulHeader2 />}

      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      <section className="tnc-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Şartlar ve Koşullar</h2>
            <div className="text">Anasayfa / Şartlar ve Koşullar</div>
          </div>
          {/* End sec-title */}
          <TermsText />
        </div>
      </section>
      {/* <!-- End TNC Section --> */}

      <FooterDefault footerStyle="alternate5" />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
