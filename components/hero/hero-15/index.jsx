import SearchForm3 from "../../common/job-search/SearchForm3";
import Funfact3 from "../../fun-fact-counter/Funfact3";

const index = () => {
  return (
    <section
      className="banner-section -type-15"
      style={{ backgroundImage: "url(images/index-15/header/13.png)" }}
    >
      <div className="auto-container">
        <div className="cotnent-box">
          <div className="title-box" data-wow-delay="300" data-aos="fade-up">
            <h3>Hayalindeki İşi Burada Bul!</h3>
            <div className="text">
              Find Jobs, Employment & Career Opportunities
            </div>
          </div>
          {/* End title-box */}

          <div
            className="job-search-form"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <SearchForm3 btnStyle="btn-style-two" />
          </div>
          {/* <!-- Job Search Form --> */}

          <div className="fun-fact-section">
            <div className="row">
              {/* <!--Column--> */}
              <Funfact3 />
            </div>
          </div>
          {/* <!-- Fun Fact Section --> */}
        </div>
        {/* End content-box */}
      </div>
    </section>
    // <!-- End Banner Section-->
  );
};

export default index;
