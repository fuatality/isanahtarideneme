import FooterDefault from "../../../components/footer/common-footer";
import DefaulHeader2 from "../../header/DefaulHeader2";
import MobileMenu from "../../header/MobileMenu";
import FilterJobBox from "./FilterJobBox";
import JobSearchForm from "./JobSearchForm";
import SearchForm from "../../common/job-search/SearchForm";

const index = () => {
  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>


      <DefaulHeader2 />
      {/* End Header with upload cv btn */}

      <MobileMenu />
      {/* End MobileMenu */}

      <section className="page-title style-two">
          <div
            className="job-search-form"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <SearchForm btnStyle="btn-style-two" />
          </div>
      </section>
      {/* <!--End Page Title--> */}

      <section className="ls-section">
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-lg-12">
              <div className="ls-outer">
                <FilterJobBox />
              </div>
            </div>
            {/* <!-- End Content Column --> */}
          </div>
          {/* End row */}
        </div>
        {/* End container */}
      </section>
      {/* <!--End Listing Page Section --> */}

      <FooterDefault footerStyle="alternate5" />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
