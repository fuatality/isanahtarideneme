import MobileMenu from "../../../header/MobileMenu";
import LoginPopup from "../../../common/form/login/LoginPopup";
import DashboardCandidatesSidebar from "../../../header/DashboardCandidatesSidebar";
import BreadCrumb from "../../BreadCrumb";
import MyProfile from "./components/my-profile";
import EducationBox from "./components/EducationBox";
import LanguageBox from "./components/LanguageBox";
import CopyrightFooter from "../../CopyrightFooter";
import DashboardCandidatesHeader from "../../../header/DashboardCandidatesHeader";
import MenuToggler from "../../MenuToggler";
import React, { useState } from "react";

const index = () => {
  const [educationBoxes, setEducationBoxes] = useState([1]);  // initial state with 1 box
  const [languageBoxes, setLanguageBoxes] = useState([1]);  // initial state with 1 box

  // ... other code ...

  const addLanguageBox = () => {
    setLanguageBoxes([...languageBoxes, languageBoxes.length + 1]);
  };

  const removeLanguageBox = () => {
    const newLanguageBoxes = [...languageBoxes];
    newLanguageBoxes.pop();
    setLanguageBoxes(newLanguageBoxes);
  };

  const addEducationBox = () => {
    setEducationBoxes([...educationBoxes, educationBoxes.length + 1]);
  };

  const removeEducationBox = () => {
    const newEducationBoxes = [...educationBoxes];
    newEducationBoxes.pop();
    setEducationBoxes(newEducationBoxes);
  };
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
                    {educationBoxes.map((boxId) => (
                      <EducationBox key={boxId} boxId={boxId} />
                    ))}
                    <div className="form-group col-lg-6 col-md-12">
                      <button type="button" className="theme-btn btn-style-one" onClick={addEducationBox}>
                        <strong>Ekle</strong>
                      </button>
                      {educationBoxes.length > 1 && (
                        <button type="button" className="theme-btn btn-style-one" onClick={removeEducationBox}>
                          <strong>Çıkar</strong>
                        </button>
                      )}
                    </div>
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
            {languageBoxes.map((boxId, index) => (
              <LanguageBox key={boxId} boxId={boxId} index={index+1} />
            ))}
            <div className="form-group col-lg-6 col-md-12">
              <button type="button" className="theme-btn btn-style-one" onClick={addLanguageBox}>
                <strong>Ekle</strong>
              </button>
              {languageBoxes.length > 1 && (
                <button type="button" className="theme-btn btn-style-one" onClick={removeLanguageBox}>
                  <strong>Çıkar</strong>
                </button>
              )}
            </div>
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
