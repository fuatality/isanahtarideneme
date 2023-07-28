import dynamic from "next/dynamic";
import employersInfo from "../../data/topCompany";
import FooterDefault from "../../components/footer/common-footer";
import DefaultHeader2 from "../../components/header/DefaulHeader2";
import MobileMenu from "../../components/header/MobileMenu";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Seo from "../../components/common/Seo";
import JobDetailsDescriptions from "../../components/employer-single-pages/shared-components/JobDetailsDescriptions";
import RelatedJobs from "../../components/employer-single-pages/related-jobs/RelatedJobs";
import MapJobFinder from "../../components/job-listing-pages/components/MapJobFinder";
import Social from "../../components/employer-single-pages/social/Social";
import PrivateMessageBox from "../../components/employer-single-pages/shared-components/PrivateMessageBox";
import { useSelector } from 'react-redux';
import DashboardCandidatesHeader from "../../components/header/DashboardCandidatesHeader";
import DashboardHeader from "../../components/header/DashboardHeader";

const EmployersSingle = () => {
  const router = useRouter();
  const [employer, setEmployersInfo] = useState({});
  const id = router.query.id;
  const userRole = useSelector((state) => state.user.role);


  useEffect(() => {
    if (!id) <h1>Loading...</h1>;
    else setEmployersInfo(employersInfo.find((item) => item.id == id));

    return () => {};
  }, [id]);

  return (
    <>
      <Seo pageTitle="Şirket Sayfası"/>

      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      {userRole === 'user' ? <DashboardCandidatesHeader /> : userRole === 'admin' ? <DashboardHeader /> : <DefaultHeader2 />}

      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      {/* <!-- Job Detail Section --> */}
      <section className="job-detail-section">
        {/* <!-- job-detail-outer--> */}
        <div className="job-detail-outer">
          <div className="auto-container">
            <div className="row">
              <div className="content-column col-lg-8 col-md-12 col-sm-12">
                {/*  job-detail */}
                <JobDetailsDescriptions />
                {/* End job-detail */}

                {/* <!-- Related Jobs --> */}
                <div className="related-jobs">
                  <div className="title-box">
                    <h3>Bakmanız Gereken Diğer İlanlar</h3>
                    <div className="text">
                      2020 ilan - 293&apos;ü bugün eklendi.
                    </div>
                  </div>
                  {/* End .title-box */}

                  <RelatedJobs />
                  {/* End RelatedJobs */}
                </div>
                {/* <!-- Related Jobs --> */}
              </div>
              {/* End .content-column */}

              <div className="sidebar-column col-lg-4 col-md-12 col-sm-12">
                <aside className="sidebar">
                  {userRole === 'user' &&(
                  <div className="btn-box">
                    <button
                      className="theme-btn btn-style-one"
                      data-bs-toggle="modal"
                      data-bs-target="#privateMessage"
                    >
                      Şirkete Mesaj Gönder
                    </button>
                    <button className="bookmark-btn">
                      <i className="flaticon-bookmark"></i>
                    </button>
                  </div>
                  )}
                  {/* End btn-box */}

                  {/* <!-- Modal --> */}
                  <div
                    className="modal fade"
                    id="privateMessage"
                    tabIndex="-1"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                      <div className="apply-modal-content modal-content">
                        <div className="text-center">
                          <h3 className="title">
                            Mesajını gönder : {employer.name}
                          </h3>
                          <button
                            type="button"
                            className="closed-modal"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        {/* End modal-header */}

                        <PrivateMessageBox />
                        {/* End PrivateMessageBox */}
                      </div>
                      {/* End .send-private-message-wrapper */}
                    </div>
                  </div>
                  {/* End .modal */}

                  <div className="sidebar-widget company-widget">
                    <div className="widget-content">
                      <div className="company-title">
                        <span className="company-logo">
                          <img src={employer?.img} alt="logo" />
                        </span>
                        <h4 className="mb-1">{employer?.name}</h4>
                        <a href="#" className="company-link">
                          {" "}
                          İş İlanı – {employer.jobNumber}
                        </a>
                      </div>
                      {/* End company-title */}

                      {/*  compnay-info */}
                      <ul className="company-info">
                        <li>
                          Endüstri: <span>Software</span>
                        </li>
                        <li>
                          Şirket Çalışan Sayısı: <span>501-1,000</span>
                        </li>
                        <li>
                          Kuruluş Tarihi: <span>2011</span>
                        </li>
                        <li>
                          Telefon: <span>{employer?.phone}</span>
                        </li>
                        <li>
                          E-mail: <span>{employer?.email}</span>
                        </li>
                        <li>
                          Lokasyon: <span>{employer?.location}</span>
                        </li>
                        <li>
                          Sosyal medya:
                          <Social />
                        </li>
                      </ul>
                      {/* End compnay-info */}

                      <div className="btn-box">
                        <a
                          href="#"
                          className="theme-btn btn-style-three"
                          style={{ textTransform: "lowercase" }}
                        >
                          www.{employer?.name}.com
                        </a>
                      </div>
                      {/* btn-box */}
                    </div>
                  </div>
                  {/* End company-widget */}

                  <div className="sidebar-widget">
                    {/* <!-- Map Widget --> */}
                    <h4 className="widget-title">İlanın Konumu</h4>
                    <div className="widget-content">
                      <div style={{ height: "300px", width: "100%" }}>
                        <MapJobFinder />
                      </div>
                    </div>
                    {/* <!--  Map Widget --> */}
                  </div>
                  {/* End sidebar-widget */}
                </aside>
                {/* End .sidebar */}
              </div>
              {/* End .sidebar-column */}
            </div>
          </div>
        </div>
        {/* <!-- job-detail-outer--> */}
      </section>
      {/* <!-- End Job Detail Section --> */}

      <FooterDefault footerStyle="alternate5" />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default dynamic(() => Promise.resolve(EmployersSingle), {
  ssr: false,
});
