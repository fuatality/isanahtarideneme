import MobileMenu from "../../../header/MobileMenu";
import DashboardCandidatesSidebar from "../../../header/DashboardCandidatesSidebar";
import BreadCrumb from "../../BreadCrumb";
import MyProfile from "./components/my-profile";
import LanguageBox from "./components/LanguageBox";
import EducationBox from "./components/EducationBox"
import ReferenceBox from "./components/ReferenceBox"
import ExperienceBox from "./components/ExperienceBox"
import CertificateBox from "./components/CertificateBox"
import OtherBox from "./components/OtherBox"
import SkillBox from "./components/SkillBox"
import CopyrightFooter from "../../CopyrightFooter";
import DashboardCandidatesHeader from "../../../header/DashboardCandidatesHeader";
import MenuToggler from "../../MenuToggler";
import React, { useState } from "react";

const index = () => {
  const [educationBoxes, setEducationBoxes] = useState([1]);  // initial state with 1 box
  const [languageBoxes, setLanguageBoxes] = useState([1]);  // initial state with 1 box
  const [experienceBoxes, setExperienceBoxes] = useState([1]);  // initial state with 1 box
  const [referenceBoxes, setReferenceBoxes] = useState([1]);  // initial state with 1 box
  const [certificateBoxes, setCertificateBoxes] = useState([1]);  // initial state with 1 box
  const [skillBoxes, setSkillBoxes] = useState([1]);  // initial state with 1 box

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

  const addExperienceBox = () => {
    setExperienceBoxes([...experienceBoxes, experienceBoxes.length + 1]);
  };

  const removeExperienceBox = () => {
    const newExperienceBoxes = [...experienceBoxes];
    newExperienceBoxes.pop();
    setExperienceBoxes(newExperienceBoxes);
  };

  const addReferenceBox = () => {
    setReferenceBoxes([...referenceBoxes, referenceBoxes.length + 1]);
  };

  const removeReferenceBox = () => {
    const newReferenceBoxes = [...referenceBoxes];
    newReferenceBoxes.pop();
    setReferenceBoxes(newReferenceBoxes);
  };

  const addCertificateBox = () => {
    setCertificateBoxes([...certificateBoxes, certificateBoxes.length + 1]);
  };

  const removeCertificateBox = () => {
    const newCertificateBoxes = [...certificateBoxes];
    newCertificateBoxes.pop();
    setCertificateBoxes(newCertificateBoxes);
  };

  const addSkillBox = () => {
    setSkillBoxes([...skillBoxes, skillBoxes.length + 1]);
  };

  const removeSkillBox = () => {
    const newSkillBoxes = [...skillBoxes];
    newSkillBoxes.pop();
    setSkillBoxes(newSkillBoxes);
  };


  return (
    <div className="page-wrapper dashboard">
      <span className="header-span"></span>
      {/* <!-- Header Span for hight --> */}

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

      <div className="ls-widget">
        <div className="tabs-box">
          <div className="widget-title">
            <h4>İş Deneyimi</h4>
          </div>
          {/* End widget-title */}

          <div className="widget-content">
            {experienceBoxes.map((boxId, index) => (
              <ExperienceBox key={boxId} boxId={boxId} index={index+1} />
            ))}
            <div className="form-group col-lg-6 col-md-12">
              <button type="button" className="theme-btn btn-style-one" onClick={addExperienceBox}>
                <strong>Ekle</strong>
              </button>
              {experienceBoxes.length > 1 && (
                <button type="button" className="theme-btn btn-style-one" onClick={removeExperienceBox}>
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
            <h4>Referanslar</h4>
          </div>
          {/* End widget-title */}

          <div className="widget-content">
            {referenceBoxes.map((boxId, index) => (
              <ReferenceBox key={boxId} boxId={boxId} index={index+1} />
            ))}
            <div className="form-group col-lg-6 col-md-12">
              <button type="button" className="theme-btn btn-style-one" onClick={addReferenceBox}>
                <strong>Ekle</strong>
              </button>
              {referenceBoxes.length > 1 && (
                <button type="button" className="theme-btn btn-style-one" onClick={removeReferenceBox}>
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
            <h4>Eğitim ve Sertifikalar</h4>
          </div>
          {/* End widget-title */}

          <div className="widget-content">
            {certificateBoxes.map((boxId, index) => (
              <CertificateBox key={boxId} boxId={boxId} index={index+1} />
            ))}
            <div className="form-group col-lg-6 col-md-12">
              <button type="button" className="theme-btn btn-style-one" onClick={addCertificateBox}>
                <strong>Ekle</strong>
              </button>
              {certificateBoxes.length > 1 && (
                <button type="button" className="theme-btn btn-style-one" onClick={removeCertificateBox}>
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
            <h4>Yetenekler</h4>
          </div>
          {/* End widget-title */}

          <div className="widget-content">
            {skillBoxes.map((boxId, index) => (
              <SkillBox key={boxId} boxId={boxId} index={index+1} />
            ))}
            <div className="form-group col-lg-6 col-md-12">
              <button type="button" className="theme-btn btn-style-one" onClick={addSkillBox}>
                <strong>Ekle</strong>
              </button>
              {skillBoxes.length > 1 && (
                <button type="button" className="theme-btn btn-style-one" onClick={removeSkillBox}>
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
