import MobileMenu from "../../../header/MobileMenu";
import LoginPopup from "../../../common/form/login/LoginPopup";
import DashboardCandidatesSidebar from "../../../header/DashboardCandidatesSidebar";
import BreadCrumb from "../../BreadCrumb";
import MyProfile from "./components/my-profile";
import SocialNetworkBox from "./components/EducationBox";
import LanguageBox from "./components/LanguageBox";
import EducationBox from "./components/EducationBox"
import ReferenceBox from "./components/ReferenceBox"
import ExperienceBox from "./components/ExperienceBox"
import CertificateBox from "./components/CertificateBox"
import OtherBox from "./components/OtherBox"
import CopyrightFooter from "../../CopyrightFooter";
import DashboardCandidatesHeader from "../../../header/DashboardCandidatesHeader";
import MenuToggler from "../../MenuToggler";

const index = () => {
  return (
    <div className="page-wrapper dashboard">
      <span className="header-span"></span>
      {/* <!-- Header Span for hight --> */}

      <LoginPopup />
      {/* End Login Popup Modal */}

      <DashboardCandidatesHeader />
      {/* End Header */}

      <MobileMenu />
      {/* End MobileMenu */}

      <DashboardCandidatesSidebar />
      {/* <!-- End Candidates Sidebar Menu --> */}

      {/* <!-- Dashboard --> */}
      <section className="user-dashboard">
        <div className="dashboard-outer">
          <BreadCrumb title="Profilim" />
          {/* breadCrumb */}

          <MenuToggler />
          {/* Collapsible sidebar button */}

          <div className="row">
            <div className="col-lg-12">
              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>Profilim</h4>
                  </div>
                  <MyProfile />
                </div>
              </div>
              {/* <!-- Ls widget --> */}

              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>Eğitim Bilgisi</h4>
                  </div>
                  {/* End widget-title */}

                  <div className="widget-content">
                    <EducationBox />
                  </div>
                </div>
              </div>
              {/* <!-- Ls widget --> */}

              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>Yabancı Dil</h4>
                  </div>
                  {/* End widget-title */}
                  <div className="widget-content">
                    <LanguageBox />
                  </div>
                </div>
              </div>
              {/* <!-- Ls widget --> */}

              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>İş Deneyimleri</h4>
                  </div>
                  {/* End widget-title */}
                  <div className="widget-content">
                    <ExperienceBox />
                  </div>
                </div>
              </div>
              {/* <!-- Ls widget --> */}

              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>Referanslar</h4>
                  </div>
                  {/* End widget-title */}
                  <div className="widget-content">
                    <ReferenceBox />
                  </div>
                </div>
              </div>
              {/* <!-- Ls widget --> */}

              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>Eğitim ve Sertifikalar</h4>
                  </div>
                  {/* End widget-title */}
                  <div className="widget-content">
                    <CertificateBox />
                  </div>
                </div>
              </div>
              {/* <!-- Ls widget --> */}

              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>Diğer Bilgiler</h4>
                  </div>
                  {/* End widget-title */}
                  <div className="widget-content">
                    <OtherBox />
                  </div>
                </div>
              </div>
              {/* <!-- Ls widget --> */}

            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End dashboard-outer */}
      </section>
      {/* <!-- End Dashboard --> */}

      <CopyrightFooter />
      {/* <!-- End Copyright --> */}
    </div>
    // End page-wrapper
  );
};

export default index;
