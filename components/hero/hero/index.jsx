import { left, right } from "@popperjs/core";
import SearchForm from "../../common/job-search/SearchForm";
import Funfact3 from "../../fun-fact-counter/Funfact3";

const index = () => {
  return (
    <section
      className="banner-section -type-15"
      style={{ backgroundImage: "url(images/index-15/header/13.svg)", backgroundSize: "contain", backgroundPosition: right
       }}
    >
      <div className="auto-container">
        <div className="cotnent-box">
          <div className="title-box" data-wow-delay="300" data-aos="fade-up">
            <h3>Hayalindeki İşi Burada Bul!</h3>
          </div>
          {/* End title-box */}

          <div
            className="job-search-form"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <SearchForm btnStyle="btn-style-two" />
          </div>
          {/* <!-- Job Search Form --> */}

          {/*<div className="fun-fact-section">
            <div className="row">
              
              <Funfact3 />
            </div>
          </div>
           <!-- Fun Fact Section --> */}
        </div>
        {/* End content-box */}
      </div>
    </section>
    // <!-- End Banner Section-->
  );
};

export default index;
